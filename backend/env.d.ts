declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    DATABASE_URL: string;
    JWT_ACCESS_KEY: string;
    JWT_REFRESH_KEY: string;
    SMTP_HOST: string;
    SMTP_PORT: number;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    API_URL: string;
    CLIENT_URL: string;
  }
}

