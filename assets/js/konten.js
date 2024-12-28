document.addEventListener("DOMContentLoaded", function () {
    // Debug: Pastikan script berjalan
    console.log('Script loaded');

    function getTaskStatus() {
        const saved = localStorage.getItem('tasks_status');
        // Debug: Cek data tersimpan
        console.log('Saved data:', saved);
        return saved ? JSON.parse(saved) : {};
    }

    function saveTaskStatus(statusObj) {
        // Debug: Cek data yang akan disimpan
        console.log('Saving:', statusObj);
        localStorage.setItem('tasks_status', JSON.stringify(statusObj));
    }

    function updateTaskStatus(containerEl, isChecked) {
        const statusField = containerEl.querySelector('.status-field');
        
        if(isChecked) {
            statusField.innerText = 'Sudah Selesai';
            statusField.classList.remove('text-gray-600')
            statusField.classList.add('text-green-600', 'dark:text-green-200')
            containerEl.classList.remove('border-gray-500', 'bg-gray-50');
            containerEl.classList.add('border-green-500', 'bg-green-50');
        } else {
            statusField.innerText = 'Belum Selesai';
            statusField.classList.remove('text-green-600', 'dark:text-green-200')
            statusField.classList.add('text-gray-600')
            containerEl.classList.remove('border-green-500', 'bg-green-50');
        }
    }

    const containers = document.querySelectorAll('.kontainer-status');
    // Debug: Cek jumlah container yang ditemukan
    console.log('Found containers:', containers.length);

    const savedStatus = getTaskStatus();

    containers.forEach(container => {
        const taskId = container.dataset.taskId;
        const checkbox = container.querySelector('.input-selesai');
        
        // Debug: Cek setiap container dan checkbox
        console.log('Processing container:', taskId);
        console.log('Checkbox found:', checkbox !== null);

        if (checkbox) {
            checkbox.checked = savedStatus[taskId] || false;
            updateTaskStatus(container, checkbox.checked);

            checkbox.addEventListener('change', function() {
                // Debug: Cek event change
                console.log('Checkbox changed:', taskId, this.checked);
                
                updateTaskStatus(container, this.checked);
                const currentStatus = getTaskStatus();
                currentStatus[taskId] = this.checked;
                saveTaskStatus(currentStatus);
            });
        }
    });
});