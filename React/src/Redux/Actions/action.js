export const GET_EMPLOYEES = 'GET_EMPLOYEES'
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS'
export const GET_SOFTLOCK_REQUESTS = 'GET_SOFTLOCK_REQUESTS'
export const GET_SOFTLOCK_SUCCESS = 'GET_SOFTLOCK_SUCCESS'

export const getEmployees = (manager) => ({ type: GET_EMPLOYEES, manager: manager });
export const getSoftlockRequests = (wfm_manager) => ({ type: GET_SOFTLOCK_REQUESTS, wfm_manager: wfm_manager })