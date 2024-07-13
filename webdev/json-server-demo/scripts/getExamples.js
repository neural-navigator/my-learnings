import axios from 'axios';

const resposneData = {
    resData: null,
    successCode: null,
    errorData: null,
    errorCode: null
}


async function getValue() {
    try{
        const response = await axios.get('http://localhost:3000/posts/1');
        resposneData.resData = response.data
        resposneData.successCode = response.status

    } catch (error) {
        if (error.response) {
            resposneData.errorData = error.response.data.message
            resposneData.errorCode = error.response.status
        }
    }
}


getValue().then(() => {
    console.log(resposneData);
});

