export const copyURLToClipboard = () => {
  const currentURL = window.location.href;
  navigator.clipboard
    .writeText(currentURL)
    .then(() => {
      alert('주소가 복사되었어요');
    })
    .catch(() => {
      alert('알 수 없는 이유로 복사를 실패했어요, 다시 시도해주세요');
    });
};
