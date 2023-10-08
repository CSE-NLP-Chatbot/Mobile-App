import axios from 'axios';

export function getfeedbacks() {
    return axios.get('https://cse-chatbot.onrender.com/adminDashboard/')
    .then(response => response.data)
};

export function get_feedbacks_by_feedback_type(feedback_type) {
    return axios.get(`https://cse-chatbot.onrender.com/adminDashboard/${feedback_type}/` )
    .then(response => response.data)
};

export function deleteFeedback(feedback_id) {
  return axios.delete(`https://cse-chatbot.onrender.com/adminDashboard/${feedback_id}`)
    .then(response => response.data)
  }