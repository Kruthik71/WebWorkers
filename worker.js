self.addEventListener('message', (event) => {
    const { fromCurrency, toCurrency, units } = event.data;
    const apiURL = ` https://v6.exchangerate-api.com/v6/d19da0d087cba0cf84f102de/pair/${fromCurrency}/${toCurrency}/${units}`;
    

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiURL);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const result = response.conversion_result;
            self.postMessage({ fromCurrency, toCurrency, result });
        }
    };
    xhr.send();
});
