import { useState } from 'preact/hooks';

const FormWithConfirmation = () => {
  // State を定義
  const [name, setName] = useState('');
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

    const messageField = document.createElement('input');
    messageField.type = 'hidden';
    messageField.name = 'message';
    messageField.id = 'message';
    messageField.value = message;
    form.appendChild(messageField);

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
          <label>
            名前:
            <input
              id="text"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            メッセージ:
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">確認画面へ</button>
        </form>
      ) : (
        // 確認画面
        <div>
          <p>名前: {name}</p>
          <p>メッセージ: {message}</p>
          <button onClick={handleBack}>戻る</button> {/* 戻るボタンを追加 */}
          <button onClick={handleConfirm}>送信</button>

        </div>
      )}
    </div>
  );
};

export default FormWithConfirmation;
