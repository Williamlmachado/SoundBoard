const sounds = ['esforçate',
'gabigoltapedindo',
'ihih',
'penido',
'cincun']

sounds.forEach(sounds => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementsById('buttons').
    appendChild(btn)
})
