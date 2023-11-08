import { useState } from 'preact/hooks';

const FormWithConfirmation = () => {
  // State を定義
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); // メールアドレス用のステートを追加
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // フォームの送信をハンドル
  const handleSubmit = (event) => {
    event.preventDefault(); // ページ遷移を防ぐ
    setShowConfirmation(true); // 確認画面を表示
  };

  // 確認画面からフォーム送信をハンドル
  const handleConfirm = () => {
    // ここでフォームのデータを送信する処理を実装
    const form = document.createElement('form');
    form.action = 'https://blog-739442.form.newt.so/v1/a3CPAUnoP';
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
    <div>
      {!showConfirmation ? (

        // フォーム入力画面
        <form onSubmit={handleSubmit}>

          <ul>
            <li>
              <label for="name">Name</label>
              <input id="name" required name="name" onChange={(e) => setName(e.target.value)} />
            </li>
            <li>
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                required
                name="email"
                onChange={(e) => setEmail(e.target.value)} // メールアドレスの変更をハンドル
              />
            </li>
            <li>
              <label for="message">Message</label>
              <textarea id="message" required name="message" onChange={(e) => setMessage(e.target.value)}></textarea>
            </li>
          </ul>
          <input type="hidden" id="recaptchaToken" name="googleReCaptchaToken" />
          <button type="submit">確認画面へ</button>
        </form>

      ) : (
        // 確認画面
        <div>
          <p>名前: {name}</p>
          <p>メールアドレス: {email}</p> {/* メールアドレスを表示 */}
          <p>メッセージ: {message}</p>
          <button onClick={handleBack}>戻る</button> {/* 戻るボタンを追加 */}
          <button onClick={handleConfirm}>送信</button>

        </div>
      )}
    </div>
  );
};

export default FormWithConfirmation;
