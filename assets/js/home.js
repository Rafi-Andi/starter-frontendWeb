const modalHtml = document.getElementById('modal-html')
        const tombolHtml = document.getElementById('tombol-html')
        const tutupHtml = document.getElementById('tutup-html')

        tombolHtml.addEventListener('click', function(e){
            e.preventDefault()
            modalHtml.classList.remove('hidden')
        })

        tutupHtml.addEventListener('click', function(e){
            e.preventDefault()
            modalHtml.classList.add('hidden')
        })

        const modalCss = document.getElementById('modal-css')
        const tombolCss = document.getElementById('tombol-css')
        const tutupCss = document.getElementById('tutup-css')

        tombolCss.addEventListener('click', function(e){
            e.preventDefault()
            modalCss.classList.remove('hidden')
        })

        tutupCss.addEventListener('click', function(e){
            e.preventDefault()
            modalCss.classList.add('hidden')
        })

        const modalJs = document.getElementById('modal-js')
        const tombolJs = document.getElementById('tombol-js')
        const tutupJs = document.getElementById('tutup-js')

        tombolJs.addEventListener('click', function(e){
            e.preventDefault()
            modalJs.classList.remove('hidden')
        })

        tutupJs.addEventListener('click', function(e){
            e.preventDefault()
            modalJs.classList.add('hidden')
        })