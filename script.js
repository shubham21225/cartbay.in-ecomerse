// single podcts js
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabs = document.querySelectorAll('.cb-product-details__tab');
            const panes = document.querySelectorAll('.cb-product-details__tab-pane');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Remove active class from all tabs and panes
                    tabs.forEach(t => t.classList.remove('cb-product-details__tab--active'));
                    panes.forEach(p => p.classList.remove('cb-product-details__tab-pane--active'));
                    
                    // Add active class to clicked tab and corresponding pane
                    this.classList.add('cb-product-details__tab--active');
                    document.getElementById(tabId).classList.add('cb-product-details__tab-pane--active');
                });
            });
            
            // Quantity selector functionality
            const quantityInput = document.querySelector('.cb-product-hero__quantity-input');
            const minusBtn = document.querySelector('.cb-product-hero__quantity-minus');
            const plusBtn = document.querySelector('.cb-product-hero__quantity-plus');
            
            if (minusBtn && plusBtn && quantityInput) {
                minusBtn.addEventListener('click', function() {
                    let currentValue = parseInt(quantityInput.value);
                    if (currentValue > 1) {
                        quantityInput.value = currentValue - 1;
                    }
                });
                
                plusBtn.addEventListener('click', function() {
                    let currentValue = parseInt(quantityInput.value);
                    if (currentValue < parseInt(quantityInput.max)) {
                        quantityInput.value = currentValue + 1;
                    }
                });
            }
            
            // Image gallery thumbnail click
            const thumbnails = document.querySelectorAll('.cb-product-hero__thumbnail');
            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    thumbnails.forEach(t => t.classList.remove('cb-product-hero__thumbnail--active'));
                    this.classList.add('cb-product-hero__thumbnail--active');
                });
            });
            
            // Color and size option selection
            const colorOptions = document.querySelectorAll('.cb-product-hero__color-option');
            const sizeOptions = document.querySelectorAll('.cb-product-hero__size-option');
            
            colorOptions.forEach(option => {
                option.addEventListener('click', function() {
                    colorOptions.forEach(o => o.classList.remove('cb-product-hero__color-option--active'));
                    this.classList.add('cb-product-hero__color-option--active');
                });
            });
            
            sizeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    sizeOptions.forEach(o => o.classList.remove('cb-product-hero__size-option--active'));
                    this.classList.add('cb-product-hero__size-option--active');
                });
            });
            
            // Add to cart button click
            const addToCartBtn = document.querySelector('.cb-product-hero__add-to-cart');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', function() {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
                    this.style.backgroundColor = '#4CAF50';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = '';
                    }, 2000);
                });
            }
        });
    





        // home js 


        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const mainNav = document.getElementById('mainNav');
            
            if (mobileMenuToggle) {
                mobileMenuToggle.addEventListener('click', function() {
                    mainNav.classList.toggle('cb-header__nav--open');
                    document.body.classList.toggle('cb-no-scroll');
                });
            }
            
            // Search toggle functionality
            const searchToggle = document.getElementById('searchToggle');
            const searchClose = document.getElementById('searchClose');
            const searchBar = document.getElementById('searchBar');
            
            if (searchToggle) {
                searchToggle.addEventListener('click', function() {
                    searchBar.classList.add('cb-header__search-bar--open');
                });
            }
            
            if (searchClose) {
                searchClose.addEventListener('click', function() {
                    searchBar.classList.remove('cb-header__search-bar--open');
                });
            }
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (mainNav.classList.contains('cb-header__nav--open') && 
                    !mainNav.contains(event.target) && 
                    !mobileMenuToggle.contains(event.target)) {
                    mainNav.classList.remove('cb-header__nav--open');
                    document.body.classList.remove('cb-no-scroll');
                }
            });
            
            // Handle dropdown menus on mobile
            const dropdownItems = document.querySelectorAll('.cb-header__nav-item--has-dropdown');
            
            dropdownItems.forEach(item => {
                const link = item.querySelector('.cb-header__nav-link');
                
                link.addEventListener('click', function(e) {
                    if (window.innerWidth < 1024) {
                        e.preventDefault();
                        item.classList.toggle('cb-header__nav-item--open');
                    }
                });
            });
        });




        // contact page js

        document.addEventListener('DOMContentLoaded', function() {
            // Form submission handling
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const submitBtn = this.querySelector('.cb-contact-form__submit');
                    const originalText = submitBtn.innerHTML;
                    
                    // Simulate form submission
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        // In real implementation, this would be an AJAX call
                        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent';
                        submitBtn.style.backgroundColor = '#4CAF50';
                        
                        setTimeout(() => {
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            submitBtn.style.backgroundColor = '';
                            contactForm.reset();
                        }, 3000);
                    }, 1500);
                });
            }
            
            // Form reset button
            const resetBtn = document.querySelector('.cb-contact-form__reset');
            if (resetBtn) {
                resetBtn.addEventListener('click', function() {
                    // Optional: Add a confirmation
                    console.log('Form cleared');
                });
            }
            
            // FAQ accordion functionality
            const faqQuestions = document.querySelectorAll('.cb-contact-faq__question');
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const item = this.parentElement;
                    const answer = this.nextElementSibling;
                    const icon = this.querySelector('.cb-contact-faq__icon');
                    
                    // Close other open items
                    document.querySelectorAll('.cb-contact-faq__item').forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('cb-contact-faq__item--active')) {
                            otherItem.classList.remove('cb-contact-faq__item--active');
                            otherItem.querySelector('.cb-contact-faq__answer').style.maxHeight = null;
                            otherItem.querySelector('.cb-contact-faq__icon').style.transform = 'rotate(0deg)';
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('cb-contact-faq__item--active');
                    
                    if (item.classList.contains('cb-contact-faq__item--active')) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        answer.style.maxHeight = null;
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
            });
            
            // Form validation styling
            const formInputs = document.querySelectorAll('.cb-contact-form__input, .cb-contact-form__textarea');
            formInputs.forEach(input => {
                // Add focus styling
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('cb-contact-form__field--focused');
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.classList.remove('cb-contact-form__field--focused');
                    
                    // Add validation styling
                    if (this.value.trim() === '' && this.required) {
                        this.parentElement.classList.add('cb-contact-form__field--error');
                    } else {
                        this.parentElement.classList.remove('cb-contact-form__field--error');
                        if (this.value.trim() !== '') {
                            this.parentElement.classList.add('cb-contact-form__field--valid');
                        } else {
                            this.parentElement.classList.remove('cb-contact-form__field--valid');
                        }
                    }
                });
                
                // Real-time validation for email
                if (input.type === 'email') {
                    input.addEventListener('input', function() {
                        const isValid = this.checkValidity();
                        if (this.value.trim() === '') {
                            this.parentElement.classList.remove('cb-contact-form__field--error');
                            this.parentElement.classList.remove('cb-contact-form__field--valid');
                        } else if (isValid) {
                            this.parentElement.classList.remove('cb-contact-form__field--error');
                            this.parentElement.classList.add('cb-contact-form__field--valid');
                        } else {
                            this.parentElement.classList.add('cb-contact-form__field--error');
                            this.parentElement.classList.remove('cb-contact-form__field--valid');
                        }
                    });
                }
            });
            
            // Select field styling
            const selectFields = document.querySelectorAll('.cb-contact-form__select');
            selectFields.forEach(select => {
                select.addEventListener('change', function() {
                    if (this.value) {
                        this.parentElement.classList.add('cb-contact-form__field--valid');
                    } else {
                        this.parentElement.classList.remove('cb-contact-form__field--valid');
                    }
                });
            });
            
            // Checkbox styling
            const checkboxes = document.querySelectorAll('.cb-contact-form__checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        this.parentElement.classList.add('cb-contact-form__checkbox-label--checked');
                    } else {
                        this.parentElement.classList.remove('cb-contact-form__checkbox-label--checked');
                    }
                });
            });
            
            // FAQ CTA hover effect
            const faqCta = document.querySelector('.cb-contact-faq__cta-link');
            if (faqCta) {
                faqCta.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(5px)';
                    }
                });
                
                faqCta.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0)';
                    }
                });
            }
        });








        // cart page js


        document.addEventListener('DOMContentLoaded', function() {
            // Quantity selector functionality
            const quantityInputs = document.querySelectorAll('.cb-cart-item__quantity-input');
            const minusButtons = document.querySelectorAll('.cb-cart-item__quantity-minus');
            const plusButtons = document.querySelectorAll('.cb-cart-item__quantity-plus');
            
            minusButtons.forEach((button, index) => {
                button.addEventListener('click', function() {
                    const input = quantityInputs[index];
                    let currentValue = parseInt(input.value);
                    if (currentValue > parseInt(input.min)) {
                        input.value = currentValue - 1;
                        updateItemTotal(index, input.value);
                        updateCartTotals();
                    }
                });
            });
            
            plusButtons.forEach((button, index) => {
                button.addEventListener('click', function() {
                    const input = quantityInputs[index];
                    let currentValue = parseInt(input.value);
                    if (currentValue < parseInt(input.max)) {
                        input.value = currentValue + 1;
                        updateItemTotal(index, input.value);
                        updateCartTotals();
                    }
                });
            });
            
            // Manual input changes
            quantityInputs.forEach((input, index) => {
                input.addEventListener('change', function() {
                    let value = parseInt(this.value);
                    const min = parseInt(this.min);
                    const max = parseInt(this.max);
                    
                    if (value < min) value = min;
                    if (value > max) value = max;
                    
                    this.value = value;
                    updateItemTotal(index, value);
                    updateCartTotals();
                });
            });
            
            // Update individual item total
            function updateItemTotal(index, quantity) {
                const priceElements = document.querySelectorAll('.cb-cart-item__price-current');
                const totalElements = document.querySelectorAll('.cb-cart-item__price-total');
                
                if (priceElements[index] && totalElements[index]) {
                    const priceText = priceElements[index].textContent.replace('₹', '').replace(',', '');
                    const price = parseFloat(priceText);
                    const total = price * quantity;
                    
                    totalElements[index].textContent = '₹' + total.toLocaleString('en-IN');
                }
            }
            
            // Update cart totals (simplified)
            function updateCartTotals() {
                // In a real implementation, this would calculate from all items
                console.log('Cart totals updated');
            }
            
            // Remove item functionality
            const removeButtons = document.querySelectorAll('.cb-cart-item__remove');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const cartItem = this.closest('.cb-cart-item');
                    if (cartItem) {
                        cartItem.style.opacity = '0.5';
                        cartItem.style.transform = 'translateX(-20px)';
                        
                        setTimeout(() => {
                            cartItem.remove();
                            checkEmptyCart();
                            updateCartTotals();
                        }, 300);
                    }
                });
            });
            
            // Coupon code toggle
            const couponToggle = document.querySelector('.cb-cart-coupon__toggle');
            const couponForm = document.querySelector('.cb-cart-coupon__form');
            
            if (couponToggle && couponForm) {
                couponToggle.addEventListener('click', function() {
                    couponForm.classList.toggle('cb-cart-coupon__form--visible');
                    const icon = this.querySelector('.cb-cart-coupon__toggle-icon');
                    if (icon) {
                        icon.classList.toggle('cb-cart-coupon__toggle-icon--rotated');
                    }
                });
            }
            
            // Apply coupon button
            const applyCouponBtn = document.querySelector('.cb-cart-coupon__apply');
            if (applyCouponBtn) {
                applyCouponBtn.addEventListener('click', function() {
                    const input = document.querySelector('.cb-cart-coupon__input');
                    if (input && input.value.trim()) {
                        // In real implementation, this would validate with backend
                        this.textContent = 'Applied';
                        this.style.backgroundColor = '#4CAF50';
                        this.disabled = true;
                        input.disabled = true;
                        
                        setTimeout(() => {
                            this.textContent = 'Apply';
                            this.style.backgroundColor = '';
                            this.disabled = false;
                            input.disabled = false;
                            input.value = '';
                            couponForm.classList.remove('cb-cart-coupon__form--visible');
                            const icon = couponToggle.querySelector('.cb-cart-coupon__toggle-icon');
                            if (icon) {
                                icon.classList.remove('cb-cart-coupon__toggle-icon--rotated');
                            }
                        }, 3000);
                    }
                });
            }
            
            // Check if cart is empty
            function checkEmptyCart() {
                const cartItems = document.querySelectorAll('.cb-cart-item');
                const cartContent = document.querySelector('.cb-cart-content');
                const emptyState = document.querySelector('.cb-cart-empty');
                
                if (cartItems.length === 0) {
                    if (cartContent) cartContent.style.display = 'none';
                    if (emptyState) emptyState.style.display = 'block';
                }
            }
            
            // Checkout button hover effect
            const checkoutBtn = document.querySelector('.cb-cart-actions__checkout');
            if (checkoutBtn) {
                checkoutBtn.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                checkoutBtn.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            }
            
            // Continue shopping hover effect
            const continueBtn = document.querySelector('.cb-cart-actions__continue');
            if (continueBtn) {
                continueBtn.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                continueBtn.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            }
            
            // Empty cart CTA hover effect
            const emptyCartCta = document.querySelector('.cb-cart-empty__cta');
            if (emptyCartCta) {
                emptyCartCta.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                emptyCartCta.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            }
        });













        // all-prodt  page js


        document.addEventListener('DOMContentLoaded', function() {
            // Blog card hover effects
            const blogCards = document.querySelectorAll('.cb-blog-card');
            blogCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Featured article CTA hover effect
            const featuredCta = document.querySelector('.cb-blog-featured__cta');
            if (featuredCta) {
                featuredCta.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(5px)';
                    }
                });
                
                featuredCta.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0)';
                    }
                });
            }
            
            // Pagination functionality
            const paginationNumbers = document.querySelectorAll('.cb-blog-pagination__number');
            paginationNumbers.forEach(number => {
                number.addEventListener('click', function() {
                    if (!this.classList.contains('cb-blog-pagination__number--active')) {
                        paginationNumbers.forEach(n => n.classList.remove('cb-blog-pagination__number--active'));
                        this.classList.add('cb-blog-pagination__number--active');
                    }
                });
            });
            
            // Previous/Next pagination buttons
            const prevBtn = document.querySelector('.cb-blog-pagination__prev');
            const nextBtn = document.querySelector('.cb-blog-pagination__next');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', function() {
                    console.log('Previous page');
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', function() {
                    console.log('Next page');
                });
            }
            
            // Load more button
            const loadMoreBtn = document.querySelector('.cb-blog-pagination__load-more-btn');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', function() {
                    const originalText = this.textContent;
                    this.textContent = 'Loading...';
                    this.disabled = true;
                    
                    // Simulate loading
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.disabled = false;
                        console.log('Load more articles');
                    }, 1500);
                });
            }
            
            // Article card CTA hover effects
            const cardCtas = document.querySelectorAll('.cb-blog-card__cta');
            cardCtas.forEach(cta => {
                cta.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(5px)';
                    }
                });
                
                cta.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0)';
                    }
                });
            });
        });







        document.addEventListener('DOMContentLoaded', function() {
            // Billing address toggle
            const sameBillingCheckbox = document.getElementById('same-billing');
            const billingSection = document.getElementById('billingSection');
            
            if (sameBillingCheckbox && billingSection) {
                sameBillingCheckbox.addEventListener('change', function() {
                    if (!this.checked) {
                        billingSection.style.display = 'block';
                    } else {
                        billingSection.style.display = 'none';
                    }
                });
            }
            
            // Form validation styling
            const formInputs = document.querySelectorAll('.cb-checkout-form__input, .cb-checkout-form__textarea, .cb-checkout-form__select');
            formInputs.forEach(input => {
                // Focus styling
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('cb-checkout-form__field--focused');
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.classList.remove('cb-checkout-form__field--focused');
                    
                    // Validation styling
                    if (this.checkValidity()) {
                        this.parentElement.classList.add('cb-checkout-form__field--valid');
                        this.parentElement.classList.remove('cb-checkout-form__field--error');
                    } else if (this.required && this.value.trim() === '') {
                        this.parentElement.classList.add('cb-checkout-form__field--error');
                        this.parentElement.classList.remove('cb-checkout-form__field--valid');
                    }
                });
                
                // Real-time validation for specific fields
                if (input.type === 'email') {
                    input.addEventListener('input', function() {
                        const isValid = this.checkValidity();
                        if (this.value.trim() === '') {
                            this.parentElement.classList.remove('cb-checkout-form__field--error', 'cb-checkout-form__field--valid');
                        } else if (isValid) {
                            this.parentElement.classList.add('cb-checkout-form__field--valid');
                            this.parentElement.classList.remove('cb-checkout-form__field--error');
                        } else {
                            this.parentElement.classList.add('cb-checkout-form__field--error');
                            this.parentElement.classList.remove('cb-checkout-form__field--valid');
                        }
                    });
                }
                
                // PIN code validation (6 digits)
                if (input.id === 'checkout-pincode') {
                    input.addEventListener('input', function() {
                        const value = this.value.trim();
                        const isValid = /^\d{6}$/.test(value);
                        
                        if (value === '') {
                            this.parentElement.classList.remove('cb-checkout-form__field--error', 'cb-checkout-form__field--valid');
                        } else if (isValid) {
                            this.parentElement.classList.add('cb-checkout-form__field--valid');
                            this.parentElement.classList.remove('cb-checkout-form__field--error');
                        } else {
                            this.parentElement.classList.add('cb-checkout-form__field--error');
                            this.parentElement.classList.remove('cb-checkout-form__field--valid');
                        }
                    });
                }
            });
            
            // Payment method selection
            const paymentRadios = document.querySelectorAll('.cb-checkout-payment__radio');
            const paymentMethodLabels = document.querySelectorAll('.cb-checkout-payment__method-label');
            
            paymentRadios.forEach((radio, index) => {
                radio.addEventListener('change', function() {
                    // Remove selected class from all
                    paymentMethodLabels.forEach(label => {
                        label.classList.remove('cb-checkout-payment__method-label--selected');
                    });
                    
                    // Add selected class to current
                    if (this.checked) {
                        paymentMethodLabels[index].classList.add('cb-checkout-payment__method-label--selected');
                    }
                });
                
                // Set initial selected state
                if (radio.checked) {
                    paymentMethodLabels[index].classList.add('cb-checkout-payment__method-label--selected');
                }
            });
            
            // Terms checkbox styling
            const termsCheckbox = document.getElementById('accept-terms');
            const termsLabel = document.querySelector('.cb-checkout-action__terms-label');
            
            if (termsCheckbox && termsLabel) {
                termsCheckbox.addEventListener('change', function() {
                    if (this.checked) {
                        termsLabel.classList.add('cb-checkout-action__terms-label--checked');
                    } else {
                        termsLabel.classList.remove('cb-checkout-action__terms-label--checked');
                    }
                });
            }
            
            // Form submission
            const checkoutForm = document.getElementById('checkoutForm');
            const placeOrderBtn = document.querySelector('.cb-checkout-action__button');
            
            if (checkoutForm && placeOrderBtn) {
                checkoutForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Check if terms are accepted
                    if (termsCheckbox && !termsCheckbox.checked) {
                        termsLabel.classList.add('cb-checkout-action__terms-label--error');
                        termsLabel.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        return;
                    }
                    
                    // Show loading state
                    const originalText = placeOrderBtn.innerHTML;
                    placeOrderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                    placeOrderBtn.disabled = true;
                    
                    // In real implementation, this would submit to WooCommerce
                    // For demo, simulate processing
                    setTimeout(() => {
                        // Simulate success
                        placeOrderBtn.innerHTML = '<i class="fas fa-check"></i> Order Placed!';
                        placeOrderBtn.style.backgroundColor = '#4CAF50';
                        
                        // In real implementation, redirect to thank you page
                        setTimeout(() => {
                            console.log('Redirecting to thank you page...');
                            // window.location.href = '/thank-you';
                        }, 1500);
                    }, 2000);
                });
            }
            
            // Trust item hover effects
            const trustItems = document.querySelectorAll('.cb-checkout-trust__item');
            trustItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Place order button hover effect
            if (placeOrderBtn) {
                placeOrderBtn.addEventListener('mouseenter', function() {
                    if (!this.disabled) {
                        this.style.transform = 'translateY(-2px)';
                    }
                });
                
                placeOrderBtn.addEventListener('mouseleave', function() {
                    if (!this.disabled) {
                        this.style.transform = 'translateY(0)';
                    }
                });
            }
        });










        document.addEventListener('DOMContentLoaded', function() {
            // Category pills functionality
            const categoryPills = document.querySelectorAll('.cb-shop-controls__pill');
            categoryPills.forEach(pill => {
                pill.addEventListener('click', function() {
                    categoryPills.forEach(p => p.classList.remove('cb-shop-controls__pill--active'));
                    this.classList.add('cb-shop-controls__pill--active');
                });
            });
            
            // Add to cart functionality
            const addToCartButtons = document.querySelectorAll('.cb-product-card__add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Added';
                    this.style.backgroundColor = '#4CAF50';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = '';
                    }, 2000);
                });
            });
            
            // Buy now functionality
            const buyNowButtons = document.querySelectorAll('.cb-product-card__buy-now');
            buyNowButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // In real implementation, this would redirect to checkout
                    console.log('Buy Now clicked');
                });
            });
            
            // Product card click (for entire card except buttons)
            const productCards = document.querySelectorAll('.cb-product-card__link');
            productCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    // Don't prevent default to allow navigation
                    console.log('Product card clicked - navigate to product page');
                });
            });
            
            // Pagination functionality
            const paginationNumbers = document.querySelectorAll('.cb-shop-pagination__number');
            paginationNumbers.forEach(number => {
                number.addEventListener('click', function() {
                    if (!this.classList.contains('cb-shop-pagination__number--active')) {
                        paginationNumbers.forEach(n => n.classList.remove('cb-shop-pagination__number--active'));
                        this.classList.add('cb-shop-pagination__number--active');
                    }
                });
            });
            
            // Previous/Next pagination buttons
            const prevBtn = document.querySelector('.cb-shop-pagination__prev');
            const nextBtn = document.querySelector('.cb-shop-pagination__next');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', function() {
                    console.log('Previous page');
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', function() {
                    console.log('Next page');
                });
            }
        });












// abot page js
        document.addEventListener('DOMContentLoaded', function() {
            // Value item hover effects
            const valueItems = document.querySelectorAll('.cb-about-values__item');
            valueItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Process step hover effects
            const processSteps = document.querySelectorAll('.cb-about-process__step');
            processSteps.forEach(step => {
                step.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                
                step.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Difference item hover effects
            const differenceItems = document.querySelectorAll('.cb-about-difference__item');
            differenceItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // CTA button hover effect
            const ctaButton = document.querySelector('.cb-about-cta__button');
            if (ctaButton) {
                ctaButton.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                ctaButton.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            }
            
            // CTA link hover effects
            const ctaLinks = document.querySelectorAll('.cb-about-cta__link');
            ctaLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Trust statement hover effects
            const trustStatements = document.querySelectorAll('.cb-about-trust__statement');
            trustStatements.forEach(statement => {
                statement.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                
                statement.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Add subtle animation on scroll (optional, can be removed)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Apply to sections for subtle entrance
            const sections = document.querySelectorAll('.cb-about-story, .cb-about-values, .cb-about-difference, .cb-about-process, .cb-about-trust');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });
        });
    





        document.addEventListener('DOMContentLoaded', function() {
            // Navigation active state toggle (demo)
            const navItems = document.querySelectorAll('.cb-account-nav__item');
            navItems.forEach(item => {
                const link = item.querySelector('.cb-account-nav__link');
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    navItems.forEach(i => i.classList.remove('cb-account-nav__item--active'));
                    item.classList.add('cb-account-nav__item--active');
                });
            });
            
            // Save changes button feedback
            const saveBtn = document.querySelector('.cb-account-details__save');
            if (saveBtn) {
                saveBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Saved!';
                    this.style.backgroundColor = '#4CAF50';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = '';
                    }, 2000);
                });
            }
            
            // Edit address links
            const editLinks = document.querySelectorAll('.cb-account-address__edit');
            editLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Edit address clicked');
                });
            });
            
            // Add new address
            const addAddress = document.querySelector('.cb-account-address__add-link');
            if (addAddress) {
                addAddress.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Add new address');
                });
            }
            
            // View all orders
            const viewAllOrders = document.querySelector('.cb-account-orders__view-all');
            if (viewAllOrders) {
                viewAllOrders.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('View all orders');
                });
            }
            
            // Card links
            const cardLinks = document.querySelectorAll('.cb-account-dashboard__card-link');
            cardLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Navigate to:', this.textContent.trim());
                });
            });
            
            // Logout link
            const logoutLink = document.querySelector('.cb-account-nav__item--logout .cb-account-nav__link');
            if (logoutLink) {
                logoutLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Logout clicked');
                });
            }
        });






