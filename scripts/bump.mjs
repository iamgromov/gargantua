import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import prompts from 'prompts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, '../package.json');

/* Skip in non-interactive environments (CI, etc.) */
if (!process.stdin.isTTY) {
  process.exit(0);
}

const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
const current = pkg.version;

const { bump } = await prompts(
  {
    type: 'select',
    name: 'bump',
    message: `Тип изменений (сейчас ${current})`,
    choices: [
      { title: `patch  → ${bumpVersion(current, 'patch')}  (исправления)`, value: 'patch' },
      { title: `minor  → ${bumpVersion(current, 'minor')}  (новый функционал)`, value: 'minor' },
      { title: `major  → ${bumpVersion(current, 'major')}  (breaking changes)`, value: 'major' },
      { title: 'skip', value: 'skip' },
    ],
    initial: 0,
  },
  {
    onCancel: () => ({ bump: 'skip' }),
  }
);

if (!bump || bump === 'skip') {
  process.exit(0);
}

try {
  execSync(`npm version ${bump} --no-git-tag-version`, {
    cwd: resolve(__dirname, '..'),
    stdio: 'inherit',
  });

  const newVersion = JSON.parse(readFileSync(pkgPath, 'utf-8')).version;

  execSync('git add package.json', { stdio: 'inherit' });
  execSync(`git commit -m "chore(release): ${current} → ${newVersion}"`, { stdio: 'inherit' });

  console.log(`\n✅ Версия обновлена: ${current} → ${newVersion}`);
} catch {
  console.error('❌ Не удалось обновить версию');
  process.exit(1);
}

/**
 * Naive semver bump (doesn't depend on npm).
 */
function bumpVersion(ver, type) {
  const [major, minor, patch] = ver.split('.').map(Number);
  switch (type) {
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'major':
      return `${major + 1}.0.0`;
    default:
      return ver;
  }
}
