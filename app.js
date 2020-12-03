const argue = [
  {
    question: '自己紹介をしてください'
  }, {
    question: '就活を始めた理由はなんですか？'
  }, {
    question: 'エンジニアを目指そうと思った理由を教えてください'
  }, {
    question: 'テックキャンプではどんなことをやっているんですか？'
  }, {
    question: 'プログラミングを学んでみた感想を教えてください'
  }, {
    question: '将来どういうエンジニアになりたいですか？'
  }, {
    question: '今後のキャリアプランを教えてください'
  }, {
    question: 'カリキュラム外で勉強していることはありますか？'
  }, {
    question: 'あなたの成功体験を教えてください'
  }, {
    question: 'あなたの失敗体験を教えてください'
  }, {
    question: '困難を乗り越えた経験があったら教えてください'
  }, {
    question: 'あなたの強みはなんですか？'
  }, {
    question: 'あなたの弱みはなんですか？'
  }, {
    question: '入社してあなたが取り組みたいことを教えてください'
  }, {
    question: 'あなたが入社して力になれることはなんですか？'
  }, {
    question: '周りの人からあなたはどのような人だと言われますか？'
  }, {
    question: '私たちに向けて質問はありますか？'
  }];

const answers = ['バッチリ', 'イマイチ', 'ダメダメ'];

const $button = document.querySelectorAll('.btn');
const buttonLength = $button.length;
let buttonIndex = 0;

const $argue = document.getElementById('js-question');
const argueLength = argue.length;
let argueIndex = 0;

// 解答ボタン
const answerButton = () => {
  while( buttonIndex < buttonLength ) {
    $button[buttonIndex].textContent = answers[buttonIndex]
    buttonIndex++;
  };
};
// 初期問題の配置
const init = () => {
  $argue.textContent = argue[argueIndex].question
  answerButton();
  argueIndex++
}
init();

// 問題の更新と終了
const changeArgue = () => {
  argueIndex++
  if (argueLength > argueIndex ) {
    $argue.textContent = argue[argueIndex].question;
  } else if(point >= 25) {
    window.alert('よかろう')
  } else {
    window.alert('精進せよ')
  }
};

let point = 0;
const judge = (elm) => {
  if (elm === $button[0]) {
    point = point + 2;
  } else if (elm === $button[1] ) {
    point++ 
  } else {
    window.alert('心せよ');
  }
  changeArgue();
};

$button.forEach(function(list) {
  list.addEventListener('click', (e) => {
    judge(e.target)
  })
});

