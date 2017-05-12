

export default (data) => {
    (function loopData(data) {
        for(let i in data) {
            if(typeof data[i] === 'boolean') {
                data[i] = false;
            }
            if(typeof data[i] === 'string') {
                data[i] = '';
            }
            if(typeof data[i] === 'object') {
                loopData(data[i]);
            }
        }
    })(data);
}