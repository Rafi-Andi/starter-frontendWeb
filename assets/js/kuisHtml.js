const sebelumKuis = document.getElementById('sebelum-kuis')
        const soalSatu = document.getElementById('nomer-satu')
        const soalDua = document.getElementById('nomer-dua')
        const soalTiga = document.getElementById('nomer-tiga')
        const soalEmpat = document.getElementById('nomer-empat')
        const soalLima = document.getElementById('nomer-lima')
        const selesaiKuis = document.getElementById('selesai-kuis')
        const nilaiField = document.getElementById('nilai-field')
        const tombolPlay = document.getElementById('tombol-')
        const jawabanSatuA = document.getElementById('soal-satu-a')
        const jawabanSatuB = document.getElementById('soal-satu-b')
        const jawabanSatuC = document.getElementById('soal-satu-c')
        const jawabanSatuD = document.getElementById('soal-satu-d')
        const tombolHapus = document.getElementById('tombol-hapus')

        const jawabanDuaA = document.getElementById('soal-dua-a')
        const jawabanDuaB = document.getElementById('soal-dua-b')
        const jawabanDuaC = document.getElementById('soal-dua-c')
        const jawabanDuaD = document.getElementById('soal-dua-d')

        const jawabanTigaA = document.getElementById('soal-tiga-a')
        const jawabanTigaB = document.getElementById('soal-tiga-b')
        const jawabanTigaC = document.getElementById('soal-tiga-c')
        const jawabanTigaD = document.getElementById('soal-tiga-d')

        const jawabanEmpatA = document.getElementById('soal-empat-a')
        const jawabanEmpatB = document.getElementById('soal-empat-b')
        const jawabanEmpatC = document.getElementById('soal-empat-c')
        const jawabanEmpatD = document.getElementById('soal-empat-d')


        const jawabanLimaA = document.getElementById('soal-lima-a')
        const jawabanLimaB = document.getElementById('soal-lima-b')
        const jawabanLimaC = document.getElementById('soal-lima-c')
        const jawabanLimaD = document.getElementById('soal-lima-d')

        const nilaiKey = 'KUIS_HTML_KEY_BARU_LAGI'
        const belumSelesaiKey = 'STATUS_HTML_BELUM_KEY_BARU_LAGI'

        window.addEventListener('load', function(){
            if(typeof (Storage) !== "undefined") {
                if (localStorage.getItem(nilaiKey) === null) {
                    localStorage.setItem(nilaiKey, 0)
                }

                if(localStorage.getItem(belumSelesaiKey) === null){
                    localStorage.setItem(belumSelesaiKey, 'true')
                }
            } else {
                alert('browser tidak mendukung')
            }

            nilaiField.innerText = localStorage.getItem(nilaiKey)

            if(localStorage.getItem(belumSelesaiKey) === 'true' ){
                const judulSebelumKuis = document.createElement('h1');
                judulSebelumKuis.classList.add('text-center', 'dark:text-white', 'font-semibold', 'text-xl')
                judulSebelumKuis.innerText = 'Tekan tombol mulai'
    
                const kontainerButton = document.createElement('div')
                kontainerButton.classList.add('text-center', 'mt-2')
    
                const buttonMulai = document.createElement('button');
                buttonMulai.innerText = 'Mulai'
                buttonMulai.classList.add('bg-cyan-400', 'px-5', 'rounded-full', 'hover:scale-90', 'inline-block', 'font-semibold')
                buttonMulai.setAttribute('id', 'tombol-mulai')
                kontainerButton.append(buttonMulai);
                
                sebelumKuis.append(judulSebelumKuis, kontainerButton);
            }
            
            const tombolMulai = document.getElementById('tombol-mulai')

            tombolMulai.addEventListener('click', function(){
                sebelumKuis.setAttribute('hidden', true)
                soalSatu.removeAttribute('hidden')
            })

        })

        if(localStorage.getItem(belumSelesaiKey) === 'false') {
            const judulSebelumKuis = document.createElement('h1');
            judulSebelumKuis.classList.add('text-center', 'dark:text-white', 'font-semibold', 'text-xl')
            judulSebelumKuis.innerText = 'Anda telah mengerjakan Kuis'

            const kontainerButton = document.createElement('div')
            kontainerButton.classList.add('text-center', 'mt-2')

            const buttonMulaiUlang = document.createElement('button');
            buttonMulaiUlang.innerText = 'Mulai Ulang'
            buttonMulaiUlang.classList.add('bg-cyan-400', 'px-5', 'rounded-full', 'hover:scale-90', 'inline-block', 'font-semibold')
            buttonMulaiUlang.setAttribute('id', 'tombol-mulai-ulang')
            kontainerButton.append(buttonMulaiUlang);

            const pernyataanNilai = document.createElement('h1');
            pernyataanNilai.classList.add('text-center', 'dark:text-white', 'font-semibold', 'text-xl')
            pernyataanNilai.innerText = 'Nilai Anda'

            const nilai = document.createElement('p');
            nilai.innerText = localStorage.getItem(nilaiKey)
            nilai.classList.add('text-3xl', 'text-center', 'font-bold', 'dark:text-white')
            sebelumKuis.append(judulSebelumKuis, pernyataanNilai, nilai, kontainerButton);

            buttonMulaiUlang.addEventListener('click', function(){
                localStorage.removeItem(nilaiKey)
                nilaiField.innerText = localStorage.getItem(nilaiKey)
                localStorage.removeItem(belumSelesaiKey)

                alert('harap refresh untuk mulai ulang')
            })
        }

        tombolHapus.addEventListener('click', function(){
            localStorage.removeItem(nilaiKey)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            localStorage.removeItem(belumSelesaiKey)

            alert('harap refresh untuk mulai ulang')
        })

        jawabanSatuA.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 20)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalSatu.setAttribute('hidden', true)
            soalDua.removeAttribute('hidden')
        })
        jawabanSatuB.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalSatu.setAttribute('hidden', true)
            soalDua.removeAttribute('hidden')
        })
        jawabanSatuC.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalSatu.setAttribute('hidden', true)
            soalDua.removeAttribute('hidden')
        })
        jawabanSatuD.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalSatu.setAttribute('hidden', true)
            soalDua.removeAttribute('hidden')
        })

        jawabanDuaA.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalDua.setAttribute('hidden', true)
            soalTiga.removeAttribute('hidden')
        })
        jawabanDuaB.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalDua.setAttribute('hidden', true)
            soalTiga.removeAttribute('hidden')
        })
        jawabanDuaC.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 20)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalDua.setAttribute('hidden', true)
            soalTiga.removeAttribute('hidden')
        })
        jawabanDuaD.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalDua.setAttribute('hidden', true)
            soalTiga.removeAttribute('hidden')
        })

        jawabanTigaA.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 20)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalTiga.setAttribute('hidden', true)
            soalEmpat.removeAttribute('hidden')
        })
        jawabanTigaB.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalTiga.setAttribute('hidden', true)
            soalEmpat.removeAttribute('hidden')
        })
        jawabanTigaC.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalTiga.setAttribute('hidden', true)
            soalEmpat.removeAttribute('hidden')
        })
        jawabanTigaD.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalTiga.setAttribute('hidden', true)
            soalEmpat.removeAttribute('hidden')
        })

        jawabanEmpatA.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalEmpat.setAttribute('hidden', true)
            soalLima.removeAttribute('hidden')
        })
        jawabanEmpatB.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalEmpat.setAttribute('hidden', true)
            soalLima.removeAttribute('hidden')
        })
        jawabanEmpatC.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 20)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalEmpat.setAttribute('hidden', true)
            soalLima.removeAttribute('hidden')
        })
        jawabanEmpatD.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalEmpat.setAttribute('hidden', true)
            soalLima.removeAttribute('hidden')
        })

        jawabanLimaA.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalLima.setAttribute('hidden', true)
            selesaiKuis.removeAttribute('hidden')
            tombolHapus.removeAttribute('hidden')

            localStorage.setItem(belumSelesaiKey, 'false')
        })
        jawabanLimaB.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalLima.setAttribute('hidden', true)
            selesaiKuis.removeAttribute('hidden')
            tombolHapus.removeAttribute('hidden')

            localStorage.setItem(belumSelesaiKey, 'false')
        })
        jawabanLimaC.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 0)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalLima.setAttribute('hidden', true)
            selesaiKuis.removeAttribute('hidden')
            tombolHapus.removeAttribute('hidden')

            localStorage.setItem(belumSelesaiKey, 'false')
        })
        jawabanLimaD.addEventListener('click', function(){
            const nilaiSaatIni = parseInt(localStorage.getItem(nilaiKey))
            localStorage.setItem(nilaiKey, nilaiSaatIni + 20)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
            soalLima.setAttribute('hidden', true)
            selesaiKuis.removeAttribute('hidden')
            tombolHapus.removeAttribute('hidden') 

            localStorage.setItem(belumSelesaiKey, 'false')
        })

        window.addEventListener(BeforeUnloadEvent, function(){
            localStorage.removeItem(nilaiKey)
            nilaiField.innerText = localStorage.getItem(nilaiKey)
        })