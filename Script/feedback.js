const stars = document.querySelectorAll('.stelline i')


stars.forEach((star, index1) => {
    star.addEventListener('click', () => {
        //console.log(index1)
        stars.forEach((star, index2) => {
            //console.log(index2)
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
            // aggiungi un if per controllare se ha già una classe
        })
    })
})

