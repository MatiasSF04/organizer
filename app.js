document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    const progressBar = document.getElementById('progress-bar');
    const progressCompleted = document.getElementById('progress-bar-completed');
    const progressText = document.getElementById('progress-text');
    
    function updateProgress() {
        const checked = document.querySelectorAll('.task-checkbox:checked').length;
        const total = checkboxes.length;
        const progress = Math.round((checked / total) * 100);
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';
        localStorage.setItem('progress', progress);
    }

    function finishProgress() {
        if (document.getElementById('progress-text').value === '100%') {
            progressBar.setAttribute('display', 'none');
            progressCompleted.setAttribute('display', 'none');
        }
    }
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
    
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
        progressBar.style.width = savedProgress + '%';
        progressText.textContent = savedProgress + '%';
    }

    finishProgress();
});