const funcNameReg = /(\w+)\((.*)\)/g
const kwReg = /(break|default|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|fallthrough|if|range|type|continue|for|import|return|var|func)/g
const strReg = /("[\w\s]*")/g
const commentReg = /\/{2}\s(.*)<i\sclass="g\s\w+">(.*)<\/i>(.*)|\/{2}\s(.*)/g
const digitsReg = /(\d+\s?)(?! |"|[\w<>])/g
const typesReg = /((?:\[\d*\])?(?:string|u?int(?:8|16|32|64)?|bool|float(?:32|64)|byte|rune|complex(?:64|128)))(?!\S)/g

function InitializeStyle() {
    const golangTags = document.getElementsByClassName("golang")

    for (let tag of golangTags) {
        defineStyle(tag)
    }
    
}

function defineStyle(preTag) {
    let text = preTag.innerHTML

    text = addStringStyle(text)
    text = addTypeStyle(text)
    text = addDigitStyle(text)
    text = addFuncStyle(text)
    text = addKwStyle(text)
    text = addCommentStyle(text)

    preTag.innerHTML = text
}

function addFuncStyle(str) {
    return str.replace(funcNameReg, '<i class="g gfn">$1</i>(<i class="g gparam">$2</i>)')
}

function addKwStyle(str) {
    return str.replace(kwReg, '<i class="g gkw">$1</i>')
}

function addStringStyle(str) {
    return str.replace(strReg, '<i class="g gstr">$1</i>')
}

function addCommentStyle(str) {
    return str.replace(commentReg, '<i class="g gcom">// $1$2$3$4</i>')
}

function addDigitStyle(str) {
    return str.replace(digitsReg, '<i class="g gd">$1</i>')
}

function addTypeStyle(str) {
    return str.replace(typesReg, '<i class="g gty">$1</i>')
}
