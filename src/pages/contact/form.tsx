import { useState } from 'preact/hooks';

const FormWithConfirmation = () => {

  const formURL = 'https://blog-739442.form.newt.so/v1/a3CPAUnoP';
  // State を定義
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); // メールアドレス用のステートを追加
  const [message, setMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const [showConfirmation, setShowConfirmation] = useState(false);



  // フォームの送信をハンドル
  const handleSubmit = (event) => {
    event.preventDefault(); // ページ遷移を防ぐ

    const tokenValue = sessionStorage.getItem('recaptchaToken');
    setRecaptchaToken(tokenValue);

    // const tokenValue = document.getElementById('recaptchaToken').value;
    // setRecaptchaToken(tokenValue);


    setShowConfirmation(true); // 確認画面を表示


  };

  // 確認画面からフォーム送信をハンドル

  const handleConfirm = () => {

    // ここでフォームのデータを送信する処理を実装
    const form = document.createElement('form');
    form.action = formURL;
    form.method = 'post';

    // 名前とメッセージをフォームに追加
    const nameField = document.createElement('input');
    nameField.type = 'hidden';
    nameField.name = 'name';
    nameField.id = 'name';
    nameField.value = name;
    form.appendChild(nameField);

    const emailField = document.createElement('input');
    emailField.type = 'hidden';
    emailField.name = 'email';
    emailField.id = 'email';
    emailField.value = email;
    form.appendChild(emailField);

    const messageField = document.createElement('input');
    messageField.type = 'hidden';
    messageField.name = 'message';
    messageField.id = 'message';
    messageField.value = message;
    form.appendChild(messageField);


    const recaptchaField = document.createElement('input');
    recaptchaField.type = 'hidden';
    recaptchaField.name = 'googleReCaptchaToken';
    recaptchaField.id = 'recaptchaToken';
    recaptchaField.value = recaptchaToken;
    form.appendChild(recaptchaField);




    // フォームをドキュメントに追加して送信
    document.body.appendChild(form);
    form.submit();
  };
  // 確認画面から編集画面に戻るハンドル
  const handleBack = () => {

    setShowConfirmation(false); // 入力フォームに戻る
  };




  return (
    <div className="c-form">
      {!showConfirmation ? (

        // フォーム入力画面
        <form onSubmit={handleSubmit}>

          <ul>
            <li>
              <label className="form-item-title" for="name">Name</label>
              <div className="form-item-body"><input id="name" required name="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
            </li>
            <li>
              <label className="form-item-title" for="email">Email</label>
              <div className="form-item-body">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)} // メールアドレスの変更をハンドル
                />
              </div>
            </li>
            <li>
              <label className="form-item-title" for="message">Message</label>
              <div className="form-item-body"><textarea id="message" value={message} required name="message" onChange={(e) => setMessage(e.target.value)}></textarea></div>
            </li>
          </ul>
          <input type="hidden" id="recaptchaToken" name="googleReCaptchaToken" />
          <button type="submit">確認画面へ</button>
        </form>

      ) : (
        // 確認画面
        <div className="c-form --confirm">


          <ul>
            <li>
              <p className="form-item-title">Name</p>
              <p className="form-item-body">{name}</p>
            </li>
            <li>
              <p className="form-item-title">Email</p>
              <p className="form-item-body">{email}</p>
            </li>
            <li>
              <p className="form-item-title">Message</p>
              <p className="form-item-body">{message}</p>
            </li>


          </ul>

          <div className="button-wrap">
            <button onClick={handleBack}>戻る</button> {/* 戻るボタンを追加 */}
            <button onClick={handleConfirm}>送信</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default FormWithConfirmation;
