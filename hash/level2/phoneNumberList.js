function solution(phone_book) {
  let answer = phone_book.sort().some((item, index) => {
    if(index === phone_book.length -1) return false

    return phone_book[index + 1].startsWith(item)
  })

  
  return !answer
}

solution(["123","456","789"])