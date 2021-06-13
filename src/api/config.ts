const ROOT_URL = process.env.REACT_APP_API_URL;

const ENDPOINTS = {
  CONTACT: `${ROOT_URL}/contacts`,
  CONTACT_DETAILS: (id: string | number) => `${ENDPOINTS.CONTACT}/${id}`,
};

export { ENDPOINTS };
