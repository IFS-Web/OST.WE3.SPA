/**
 * Session Settings
 */
const session = {
  secret: '07afa4435f1a4c46801691c859ce504716fd68fd1',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
};

/**
 * CORS Settings
 */
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  exposedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
}

/**
 * Environment Override Settings.
 */
const defaultServerPort = '3000';
const defaultHostname = 'localhost';
const loggingScope = 'we3DemoServer:*';
const appLoggingScope = 'we3DemoServer:www';

export const config = {
	session,
    env: { defaultServerPort, defaultHostname, appLoggingScope, loggingScope },
	corsOptions
};