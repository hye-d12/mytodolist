const quotes = [
  {
    quote: "이건 첫번째 명언이야",
    author: "시작혜지",
  },
  {
    quote: "이건 두번째 명언이야",
    author: "이혜지",
  },
  {
    quote: "이건 세번째 명언이야",
    author: "삼혜지",
  },
  {
    quote: "이건 네번째 명언이야",
    author: "사혜지",
  },
  {
    quote: "이건 다섯번째 명언이야",
    author: "오혜지",
  },
  {
    quote: "이건 여섯번째 명언이야",
    author: "육혜지",
  },
  {
    quote: "이건 일곱번째 명언이야",
    author: "칠혜지",
  },
  {
    quote: "이건 여덟번째 명언이야",
    author: "팔혜지",
  },
  {
    quote: "이건 아홉번째 명언이야",
    author: "구혜지",
  },
  {
    quote: "이건 열번째 명언이야",
    author: "끝혜지",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
