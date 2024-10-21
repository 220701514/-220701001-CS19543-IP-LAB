function calculateBill() {
    const calls = document.getElementById('calls').value;
    const messages = document.getElementById('messages').value;
    const data = document.getElementById('data').value;

    // Rates for services
    const callRate = 0.10;  // 10 cents per call
    const messageRate = 0.05;  // 5 cents per message
    const dataRate = 5.00;  // $5 per GB

    // Calculate total bill
    const totalBill = (calls * callRate) + (messages * messageRate) + (data * dataRate);

    // Display total bill
    document.getElementById('total-bill').innerText = totalBill.toFixed(2);
}
