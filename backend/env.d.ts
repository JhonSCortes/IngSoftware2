declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGO_URL: string;
        SECRET: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }
  export {}