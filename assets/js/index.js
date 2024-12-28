
        const tombolHome = document.getElementById('tombol-home')
        const dropdownHome = document.getElementById('dropdown-home')

        tombolHome.addEventListener('click', function(e){
            e.preventDefault()
            dropdownHome.classList.toggle('hidden')
        })
        const tombolContent = document.getElementById('tombol-content')
        const dropdownContent = document.getElementById('dropdown-content')

        tombolContent.addEventListener('click', function(e){
            e.preventDefault()
            dropdownContent.classList.toggle('hidden')
        })
        const tombolQuiz = document.getElementById('tombol-quiz')
        const dropdownQuiz = document.getElementById('dropdown-quiz')

        tombolQuiz.addEventListener('click', function(e){
            e.preventDefault()
            dropdownQuiz.classList.toggle('hidden')
        })

        
        const navList = document.getElementById('nav-list')
        const menuIkon = document.getElementById('menu-ikon')
        
        menuIkon.addEventListener('click', function(e){
            e.preventDefault()
            navList.classList.toggle('aktif')
        })

        document.addEventListener('click', function(e) {
            if(!tombolHome.contains(e.target) && !dropdownHome.contains(e.target)){
                dropdownHome.classList.add('hidden')
            }

            if(!tombolContent.contains(e.target) && !dropdownContent.contains(e.target)){
                dropdownContent.classList.add('hidden')
            }
    
            if(!tombolQuiz.contains(e.target) && !dropdownQuiz.contains(e.target)){
                dropdownQuiz.classList.add('hidden')
            }
            if(!navList.contains(e.target) && !menuIkon.contains(e.target)){
                navList.classList.remove('aktif')
            }
        })

        

