import type { FC } from 'react';

import { Button, Typography } from 'shared/ui';

import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.main}>
      <Typography variant='t30b'>Typography</Typography>
      <div className={styles.row}>
        <Typography variant='t30b'>Some text</Typography>
        <Typography variant='t24b'>Some text</Typography>
        <Typography variant='t18b'>Some text</Typography>
        <Typography variant='t14_130'>Some text</Typography>
        <Typography variant='t14'>Some text</Typography>
        <Typography variant='t10'>Some text</Typography>
      </div>

      <Typography variant='t30b'>Button</Typography>
      <div className={styles.row}>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='danger'>Danger</Button>
        <Button variant='success'>Success</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
        <Button variant='success' loading={true}>
          Success
        </Button>
        <Button variant='success' disabled={true}>
          Success
        </Button>
      </div>
    </div>
  );
};
