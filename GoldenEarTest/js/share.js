const url = 'https://goldenear.netlify.app';

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '황금 귀 테스트';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.jpeg';
    const shareURL = url + 'page/result-' + resultAlt + '.html';


    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
        },
        buttons: [
            {
                title: '결과 확인하기',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            }
        ]
    });

}
