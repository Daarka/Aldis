async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    
    for (const element of elements) {
        const file = element.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (response.ok) {
                element.innerHTML = await response.text();
            } else {
                element.innerHTML = 'Component not found';
            }
        } catch (error) {
            element.innerHTML = 'Error loading component';
        }
    }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', includeHTML);