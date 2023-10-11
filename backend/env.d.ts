declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATABASE_URL: string;
        SECRET: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }
  export {}