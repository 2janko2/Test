import axios from "axios";

let mainRequestUrl = process.env.REACT_APP_REQUEST_URL;

const axiosInstance = axios.create({
    crossDomain: true,
    baseURL: mainRequestUrl,
    headers: {
        Authorization: "ab1497f0035e652a7328c949e076f7a68495dccd",
    },
});

export function login(data) {
    return axiosInstance.post("api/v1/sessions", data);
}

export function sendDomain(data) {
    let mockData = {
        spf: "v=spf1 a mx include:hosting.com include:_spf.smtp.com ~all",
    };
    return mockData;
}

export function verifySpfParameter() {
    let mockData = {
        dnsName: "dns",
        dnsValue:
            "v=DKIM1\\;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1TaNgLlSyQMNWVLNLvyYneDgaL2oqQE8T5illKqCgDtFHc8eHVAU+nlcaGmrKmDMw9dbgiGk1ocgZ56NR4ycfUHwQhvQPMUZw0cveel8EAGoUyPmqfcPibytH81NFtTMAxUeM4Op8A6iHkvAMj5qLf4YRNsTkKAV",
    };
    return mockData;
}

export function verifyDKIM() {
    let mockData = {
        dkimStatus: "verified",
    };
    return mockData;
}

export function sendInstructions() {
    let mockData = {
        status: "success",
    };
    return mockData;
}
