export const Success = ({ count }) => {
    return (
        <div class="success-block">
            <img src="/assets/success.svg" alt="Success" />
            <h3>Успешно!</h3>
            <p>Приглашение отправлено {count} {count === 1 ? `пользователю` : `пользователям` }</p>
            <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
        </div>
    );
};
