// Multi-Step Form Logic
let currentStep = 1;
const totalSteps = 5;
const formData = {};

// DOM Elements
const form = document.getElementById('loanApplicationForm');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const successScreen = document.getElementById('successScreen');
const formActions = document.getElementById('formActions');
const reviewContent = document.getElementById('reviewContent');

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateProgress();
});

function setupEventListeners() {
    // Navigation buttons
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);
    form.addEventListener('submit', handleSubmit);

    // Loan type selection
    const loanTypeInputs = document.querySelectorAll('input[name="loanType"]');
    loanTypeInputs.forEach(input => {
        input.addEventListener('change', handleLoanTypeChange);
    });

    // Real-time validation
    form.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearError(input));
    });
}

function handleNext() {
    if (validateCurrentStep()) {
        saveCurrentStepData();
        
        if (currentStep < totalSteps) {
            hideCurrentStep();
            currentStep++;
            showCurrentStep();
            updateProgress();
        }
    }
}

function handlePrev() {
    if (currentStep > 1) {
        hideCurrentStep();
        currentStep--;
        showCurrentStep();
        updateProgress();
    }
}

function handleLoanTypeChange(e) {
    const loanType = e.target.value;
    formData.loanType = loanType;
    
    // Show/hide appropriate step 3 based on loan type
    const businessDetailsStep = document.getElementById('businessDetailsStep');
    const vehicleDetailsStep = document.getElementById('vehicleDetailsStep');
    
    if (loanType === 'business') {
        businessDetailsStep.style.display = 'block';
        vehicleDetailsStep.style.display = 'none';
        
        // Make business fields required
        setFieldsRequired('businessDetailsStep', true);
        setFieldsRequired('vehicleDetailsStep', false);
    } else if (loanType === 'car') {
        businessDetailsStep.style.display = 'none';
        vehicleDetailsStep.style.display = 'block';
        
        // Make vehicle fields required
        setFieldsRequired('vehicleDetailsStep', true);
        setFieldsRequired('businessDetailsStep', false);
    }
}

function setFieldsRequired(stepId, required) {
    const step = document.getElementById(stepId);
    if (!step) return;
    
    const inputs = step.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.type !== 'radio' && input.type !== 'checkbox') {
            if (required) {
                input.setAttribute('required', 'required');
            } else {
                input.removeAttribute('required');
            }
        }
    });
}

function validateCurrentStep() {
    const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    let isValid = true;

    // Special handling for step 3 (conditional fields)
    if (currentStep === 3) {
        const loanType = formData.loanType;
        const fieldsToValidate = loanType === 'business' 
            ? ['businessName', 'businessType', 'yearsInBusiness', 'annualRevenue']
            : ['vehicleType', 'vehicleMake', 'vehicleModel', 'vehicleYear'];
        
        fieldsToValidate.forEach(fieldName => {
            const field = document.getElementById(fieldName) || document.querySelector(`input[name="${fieldName}"]:checked`);
            if (field && !validateField(field)) {
                isValid = false;
            }
        });
    } else {
        // Validate all required fields in current step
        const fields = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
    }

    // Special validation for step 5 (Review - checkboxes)
    if (currentStep === 5) {
        const agreeToTerms = document.getElementById('agreeToTerms');
        const agreeToCredit = document.getElementById('agreeToCredit');
        
        if (!agreeToTerms.checked || !agreeToCredit.checked) {
            showToast('Please agree to the terms and conditions', 'error');
            isValid = false;
        }
    }

    return isValid;
}

function validateField(field) {
    const fieldName = field.name || field.id;
    const errorElement = document.getElementById(`${fieldName}Error`);
    let errorMessage = '';

    // Required field check
    if (field.hasAttribute('required') && !field.value.trim()) {
        errorMessage = 'This field is required';
    }
    
    // Radio buttons
    if (field.type === 'radio') {
        const radioGroup = document.querySelectorAll(`input[name="${field.name}"]`);
        const isChecked = Array.from(radioGroup).some(radio => radio.checked);
        if (!isChecked) {
            errorMessage = 'Please select an option';
        }
    }

    // Specific field validations
    if (!errorMessage && field.value) {
        switch (fieldName) {
            case 'email':
                if (!window.formValidation.validateEmail(field.value)) {
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            
            case 'phone':
                if (!window.formValidation.validatePhone(field.value)) {
                    errorMessage = 'Please enter a valid phone number';
                }
                break;
            
            case 'zipCode':
                if (!window.formValidation.validateZipCode(field.value)) {
                    errorMessage = 'Please enter a valid ZIP code';
                }
                break;
            
            case 'loanAmount':
                const amount = parseFloat(field.value);
                if (amount < 5000 || amount > 5000000) {
                    errorMessage = 'Loan amount must be between $5,000 and $5,000,000';
                }
                break;
            
            case 'loanPurpose':
                if (field.value.length < 10) {
                    errorMessage = 'Please provide at least 10 characters';
                }
                break;
            
            case 'annualIncome':
                const income = parseFloat(field.value);
                if (income < 20000) {
                    errorMessage = 'Annual income must be at least $20,000';
                }
                break;
            
            case 'vehicleYear':
                const year = parseInt(field.value);
                const currentYear = new Date().getFullYear();
                if (year < 1990 || year > currentYear + 1) {
                    errorMessage = `Year must be between 1990 and ${currentYear + 1}`;
                }
                break;
        }
    }

    // Display error
    if (errorMessage) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
        return false;
    } else {
        field.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
        }
        return true;
    }
}

function clearError(field) {
    const errorElement = document.getElementById(`${field.name || field.id}Error`);
    field.classList.remove('error');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function saveCurrentStepData() {
    const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    const fields = currentStepElement.querySelectorAll('input, select, textarea');
    
    fields.forEach(field => {
        if (field.type === 'radio') {
            if (field.checked) {
                formData[field.name] = field.value;
            }
        } else if (field.type === 'checkbox') {
            formData[field.name] = field.checked;
        } else {
            formData[field.name] = field.value;
        }
    });

    // Generate review content when reaching step 5
    if (currentStep === 4) {
        generateReviewContent();
    }
}

function generateReviewContent() {
    const sections = [];

    // Loan Information
    const loanSection = {
        title: 'Loan Information',
        icon: 'fa-file-invoice-dollar',
        items: [
            { label: 'Loan Type', value: formData.loanType === 'business' ? 'Business Loan' : 'Car Loan' },
            { label: 'Loan Amount', value: `$${parseInt(formData.loanAmount).toLocaleString()}` },
            { label: 'Purpose', value: formData.loanPurpose }
        ]
    };
    sections.push(loanSection);

    // Specific Details
    if (formData.loanType === 'business') {
        const businessSection = {
            title: 'Business Details',
            icon: 'fa-building',
            items: [
                { label: 'Business Name', value: formData.businessName },
                { label: 'Business Type', value: formatValue(formData.businessType) },
                { label: 'Years in Business', value: formData.yearsInBusiness },
                { label: 'Annual Revenue', value: `$${parseInt(formData.annualRevenue).toLocaleString()}` }
            ]
        };
        sections.push(businessSection);
    } else if (formData.loanType === 'car') {
        const vehicleSection = {
            title: 'Vehicle Details',
            icon: 'fa-car',
            items: [
                { label: 'Condition', value: formData.vehicleType === 'new' ? 'New' : 'Used' },
                { label: 'Make', value: formData.vehicleMake },
                { label: 'Model', value: formData.vehicleModel },
                { label: 'Year', value: formData.vehicleYear }
            ]
        };
        sections.push(vehicleSection);
    }

    // Personal Information
    const personalSection = {
        title: 'Personal Information',
        icon: 'fa-user',
        items: [
            { label: 'Name', value: `${formData.firstName} ${formData.lastName}` },
            { label: 'Email', value: formData.email },
            { label: 'Phone', value: formData.phone },
            { label: 'Address', value: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}` }
        ]
    };
    sections.push(personalSection);

    // Financial Information
    const financialSection = {
        title: 'Financial Information',
        icon: 'fa-dollar-sign',
        items: [
            { label: 'Employment Status', value: formatValue(formData.employmentStatus) },
            { label: 'Annual Income', value: `$${parseInt(formData.annualIncome).toLocaleString()}` }
        ]
    };
    sections.push(financialSection);

    // Generate HTML
    let html = '';
    sections.forEach(section => {
        html += `
            <div class="review-section">
                <h3><i class="fas ${section.icon}"></i> ${section.title}</h3>
                ${section.items.map(item => `
                    <div class="review-item">
                        <span class="review-label">${item.label}</span>
                        <span class="review-value">${item.value}</span>
                    </div>
                `).join('')}
            </div>
        `;
    });

    reviewContent.innerHTML = html;
}

function formatValue(value) {
    if (!value) return '';
    return value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function hideCurrentStep() {
    const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    if (currentStepElement) {
        currentStepElement.classList.remove('active');
    }
}

function showCurrentStep() {
    // Handle special case for step 3
    if (currentStep === 3) {
        const loanType = formData.loanType;
        const businessStep = document.getElementById('businessDetailsStep');
        const vehicleStep = document.getElementById('vehicleDetailsStep');
        
        if (loanType === 'business') {
            businessStep.classList.add('active');
        } else if (loanType === 'car') {
            vehicleStep.classList.add('active');
        }
    } else {
        const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        if (currentStepElement) {
            currentStepElement.classList.add('active');
        }
    }
}

function updateProgress() {
    const progress = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${progress}%`;

    // Update step badges
    const badges = document.querySelectorAll('.progress-step-badge');
    badges.forEach((badge, index) => {
        badge.classList.remove('active', 'completed');
        
        if (index + 1 < currentStep) {
            badge.classList.add('completed');
            badge.innerHTML = '<i class="fas fa-check"></i>';
        } else if (index + 1 === currentStep) {
            badge.classList.add('active');
            badge.textContent = index + 1;
        } else {
            badge.textContent = index + 1;
        }
    });

    // Update navigation buttons
    if (currentStep === 1) {
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }

    if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

function handleSubmit(e) {
    e.preventDefault();

    if (!validateCurrentStep()) {
        return;
    }

    saveCurrentStepData();

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Generate reference number
        const referenceNumber = generateReferenceNumber();
        document.getElementById('referenceNumber').textContent = referenceNumber;

        // Hide form and show success screen
        form.querySelectorAll('.form-step').forEach(step => step.style.display = 'none');
        formActions.style.display = 'none';
        document.querySelector('.progress-container').style.display = 'none';
        successScreen.style.display = 'block';

        // Show success toast
        showToast('Application submitted successfully!', 'success');

        // Store application data (in real app, this would be sent to server)
        console.log('Form Data:', formData);
        
        // Reset button state
        submitBtn.innerHTML = 'Submit Application';
        submitBtn.disabled = false;
    }, 2000);
}

function generateReferenceNumber() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `BF-${timestamp}${random}`;
}

// Auto-format phone number
document.getElementById('phone')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    e.target.value = value;
});

// Auto-format ZIP code
document.getElementById('zipCode')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = `${value.slice(0, 5)}-${value.slice(5, 9)}`;
    }
    e.target.value = value;
});

// Format currency inputs
['loanAmount', 'annualRevenue', 'annualIncome'].forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
        field.addEventListener('blur', function(e) {
            if (e.target.value) {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                    e.target.setAttribute('data-raw-value', value);
                }
            }
        });
    }
});

console.log('Form JS Loaded Successfully');
