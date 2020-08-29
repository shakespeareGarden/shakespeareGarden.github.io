function goToPage(pageName) {
    var toURL = 'https://sites.google.com/view/shakespearegarden/plants/' + pageName
    var button = document.createElement('button')
    button.innerHTML = '<a href="' + toURL + '">' + pageName.split('-').join(' ') + '</a>'
    document.body.appendChild(button)
    document.location.href = toURL
}