import React from "react";
import styled from "styled-components";
import axios from "axios";

const DOMAIN_URL = "http://localhost";
const BACKEND_URL = DOMAIN_URL + ":8000";
const API_URL = DOMAIN_URL + "/learn";
const BACK_API_URL = BACKEND_URL + "/learn";

export { DOMAIN_URL, API_URL };
export { BACKEND_URL, BACK_API_URL };
