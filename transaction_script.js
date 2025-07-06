// Transaction data
const transactions = [
    {
        referenceNo: "20250303181467C5E387A4FE223604",
        order: "MTN SME 500MB PURCHASE SUCCESSFUL ON 07048480522",
        details: "DEAR CUSTOMER, YOU HAVE SUCCESSFULLY SHARED 500MB DATA TO 2348146298981.",
        date: "03-Mar-25 06:14 PM",
        amount: "₦300",
        prevBal: "₦310.20",
        postBal: "₦10.20",
        status: "success"
    },
    {
        referenceNo: "MNFY[53]20250303181149|015787",
        order: "Wallet funding of N250 was successful",
        details: "",
        date: "03-Mar-25 06:11 PM",
        amount: "₦250",
        prevBal: "₦60.20",
        postBal: "₦310.20",
        status: "success"
    },
    {
        referenceNo: "20250224210567BCD117949C460738",
        order: "MTN SME 500MB PURCHASE SUCCESSFUL ON 08146298981",
        details: "DEAR CUSTOMER, YOU HAVE SUCCESSFULLY SHARED 500MB DATA TO 2348146298981. THANKYOU",
        date: "24-Feb-25 09:05 PM",
        amount: "₦130",
        prevBal: "₦190.20",
        postBal: "₦60.20",
        status: "success"
    },
    {
        referenceNo: "20250224210567BCD117949C460738",
        order: "MTN SME 500MB PURCHASE SUCCESSFUL ON 08033633471",
        details: "DEAR CUSTOMER, YOU HAVE SUCCESSFULLY SHARED 500MB DATA TO 2348146298981. THANKYOU",
        date: "24-Feb-25 09:05 PM",
        amount: "₦130",
        prevBal: "₦190.20",
        postBal: "₦60.20",
        status: "success"
    },
    {
        referenceNo: "20250224210567BCD117949C460738",
        order: "MTN SME 500MB PURCHASE SUCCESSFUL ON 08146298981",
        details: "DEAR CUSTOMER, YOU HAVE SUCCESSFULLY SHARED 500MB DATA TO 2348146298981. THANKYOU",
        date: "24-Feb-25 09:05 PM",
        amount: "₦130",
        prevBal: "₦190.20",
        postBal: "₦60.20",
        status: "success"
    },
    {
        referenceNo: "20250223121567BB034AC5A0EF0000",
        order: "MTN SME 3GB PURCHAS SUCCESSFUL ON 08146298981",
        details: "DEAR CUSTOMER, YOU HAVE SUCCESSFULLY SHARED 3GB DATA TO 2348146298981. THANKYOU",
        date: "24-Feb-25 09:05 PM",
        amount: "₦130",
        prevBal: "₦190.20",
        postBal: "₦60.20",
        status: "success"
    },
    {
        referenceNo: "20250217010167B27C5E8506437082",
        order: "MTN SME 1GB PURCHASE FAILED ON 08146298981",
        details: "",
        date: "17-Feb-25 01:01 AM",
        amount: "₦258",
        prevBal: "₦56.20",
        postBal: "₦56.20",
        status: "failed"
    },
    {
        referenceNo: "20250217010167B27C5E8506437082",
        order: "MTN SME 1GB PURCHASE FAILED ON 08033633471",
        details: "",
        date: "17-Feb-25 01:01 AM",
        amount: "₦258",
        prevBal: "₦56.20",
        postBal: "₦56.20",
        status: "failed"
    },
    {
        referenceNo: "20250217010167B27C5E8506437082",
        order: "MTN SME 1GB PURCHASE FAILED ON 08033633471",
        details: "",
        date: "17-Feb-25 01:01 AM",
        amount: "₦258",
        prevBal: "₦56.20",
        postBal: "₦56.20",
        status: "failed"
    },
    {
        referenceNo: "20250217005967B27BC4EF6BC78183",
        order: "MTN SME 1GB PURCHASE FAILED ON 08146298981",
        details: "",
        date: "17-Feb-25 12:59 AM",
        amount: "₦258",
        prevBal: "₦56.20",
        postBal: "₦56.20",
        status: "failed"
    },
    {
        referenceNo: "20250217005967B27BC4EF6BC78183",
        order: "MTN SME 1GB PURCHASE FAILED ON 08146298981",
        details: "",
        date: "17-Feb-25 12:59 AM",
        amount: "₦258",
        prevBal: "₦56.20",
        postBal: "₦56.20",
        status: "failed"
    },
    {
        referenceNo: "20250217005967B27BC4EF6BC78183",
        order: "MTN SME 1GB PURCHASE FAILED ON 08146298981",
        details: "",
        date: "17-Feb-25 12:59 AM",
        amount: "₦258",
        prevBal: "₦56.20",
        postBal: "₦56.20",
        status: "failed"
    },
    {
        referenceNo: "20250217005867B27BBB1AFE251215",
        order: "MTN SME 1GB PURCHASE FAILED ON 08146298981",
        details: "",
        date: "17-Feb-25 12:58 AM",
        amount: "₦258",
        prevBal: "₦56.20",
        postBal: "₦56.20",
        status: "failed"
    }
];

// DOM Elements
const transactionsList = document.querySelector('.transactions-list');
const transactionModal = document.getElementById('transactionModal');
const modalContent = document.querySelector('.transaction-details');
const closeBtn = document.querySelector('.close-btn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

// Display transactions
function displayTransactions(filteredTransactions = transactions) {
    transactionsList.innerHTML = '';
    
    filteredTransactions.slice(0, 5).forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.className = 'transaction-item';
        
        transactionItem.innerHTML = `
            <div class="transaction-info">
                <h3>${transaction.order.split(' ON ')[0]}</h3>
                <p>Ref: ${transaction.referenceNo.substring(0, 12)}...</p>
                <p class="transaction-date">${transaction.date}</p>
            </div>
            <div class="transaction-amount ${transaction.status === 'success' ? 'transaction-success' : 'transaction-failed'}">
                ${transaction.amount}
            </div>
        `;
        
        transactionItem.addEventListener('click', () => openTransactionModal(transaction));
        transactionsList.appendChild(transactionItem);
    });
}

// Open transaction modal
function openTransactionModal(transaction) {
    modalContent.innerHTML = `
        <h4>Transaction Details</h4>
        <div class="detail-row">
            <span class="detail-label">Reference No.:</span>
            <span class="detail-value">${transaction.referenceNo}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Order:</span>
            <span class="detail-value">${transaction.order}</span>
        </div>
        ${transaction.details ? `<div class="detail-row">
            <span class="detail-label">Details:</span>
            <span class="detail-value">${transaction.details}</span>
        </div>` : ''}
        <div class="detail-row">
            <span class="detail-label">Date:</span>
            <span class="detail-value">${transaction.date}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Amount:</span>
            <span class="detail-value ${transaction.status === 'success' ? 'transaction-success' : 'transaction-failed'}">${transaction.amount}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Previous Balance:</span>
            <span class="detail-value">${transaction.prevBal}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Post Balance:</span>
            <span class="detail-value">${transaction.postBal}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Status:</span>
            <span class="detail-value ${transaction.status === 'success' ? 'transaction-success' : 'transaction-failed'}">${transaction.status.toUpperCase()}</span>
        </div>
    `;
        // Add to the openTransactionModal function, after setting the modal content
    const printBtn = document.createElement('button');
    printBtn.className = 'print-btn';
    printBtn.innerHTML = '<i class="fas fa-print"></i> Print';
    printBtn.addEventListener('click', printTransaction);

    const reportBtn = document.createElement('button');
    reportBtn.className = 'report-btn';
    reportBtn.innerHTML = '<i class="fas fa-flag"></i> Report Issue';
    reportBtn.addEventListener('click', reportTransaction);

    modalContent.appendChild(document.createElement('div')).className = 'modal-actions';
    modalContent.querySelector('.modal-actions').appendChild(printBtn);
    modalContent.querySelector('.modal-actions').appendChild(reportBtn);

    // Print function
    function printTransaction() {
        window.print();
    }
    // Report function
    function reportTransaction() {
        const currentTransaction = getCurrentTransaction(); // You'll need to implement this
        const subject = encodeURIComponent(`Issue with transaction ${currentTransaction.referenceNo}`);
        const body = encodeURIComponent(`I'm reporting an issue with this transaction:\n\nReference No: ${currentTransaction.referenceNo}\nAmount: ${currentTransaction.amount}\nDate: ${currentTransaction.date}\n\nIssue description:`);
        
        window.location.href = `mailto:support@bofiasub.com?subject=${subject}&body=${body}`;
    }

    // Helper function to get the currently displayed transaction
    function getCurrentTransaction() {
        const referenceNo = document.querySelector('.transaction-details .detail-value').textContent;
        return transactions.find(t => t.referenceNo === referenceNo);
    }
    
    transactionModal.style.display = 'flex';
}

// Close modal
closeBtn.addEventListener('click', () => {
    transactionModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === transactionModal) {
        transactionModal.style.display = 'none';
    }
});

// Search functionality
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm) {
        const filtered = transactions.filter(trans => 
            trans.order.toLowerCase().includes(searchTerm) || 
            trans.referenceNo.toLowerCase().includes(searchTerm) ||
            trans.details.toLowerCase().includes(searchTerm)
        );
        displayTransactions(filtered);
    } else {
        displayTransactions();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayTransactions();
});