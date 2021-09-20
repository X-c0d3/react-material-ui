const AppConfig = {
    default_page_size: 20,
    pageSizeOptions: [20, 50, 100, 200, 300, 400, 500],
    domain_data_expiry_minutes: 1000,
    defaultDisplayDateFormat: 'DD MMM YY HH:mm:ss',
    socket_io_url: process.env.REACT_APP_SOCKET_IO_URL,
    google_map_api_key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    discussion_url: process.env.REACT_APP_DISCUSSION_URL,
    olap_api_url: process.env.REACT_APP_OLAP_API_URL,
    knowledgecenter_url: process.env.REACT_APP_KNOWLEDGE_CENTER_URL,
    archivedb_url: process.env.REACT_APP_ARCHIVEDB_URL,
    accessory_url: process.env.REACT_APP_ACCESSORY_URL,
    app_env: process.env.REACT_APP_ENV,
    offline_detector_url: process.env.REACT_APP_OFFLINE_DETECTOR_URL,
    release_version: process.env.REACT_APP_RELEASE_VERSION,
};

const ErrorMessages = {
    Error: 'Error',
    ErrorUnauthorized: 'You are not allowed to access this resource',
    ErrorBadRequest: 'Bad request',
    ErrorResourceNotFound: '404 Resource Not Found',
    ErrorInternalServer: 'Internal Server Error',
    ErrorNotAllowPermission:
      'You are not allowed to access this resource. Please contact administrator.',
  };


export { AppConfig , ErrorMessages}