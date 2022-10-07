/*
10개 -> 황금귀
8,9개 -> 임금님귀
5,6,7개 -> 부처님귀
2,3,4개 -> 아기귀
0,1개 -> 걱정되귀
*/

const qnaList = [
    {
        q: '1. 이 소리는 언제 들릴까요?',
        a: [
            { answer: '자동차 후진 시 후방센서에 무언가가 감지될 때!', correct: false },
            { answer: '전자레인지 조리가 완료 되었을 때!', correct: true },
            { answer: '냉장고를 너무 오래 열어뒀을 때!', correct: false },
        ],
        audio: "audio-1.mp3",
    },

    {
        q: '2. 이 소리는 무슨 소리일까요?',
        a: [
            { answer: '수업시작을 알리는 차임벨', correct: false },
            { answer: '빨래완료를 알리는 세탁기', correct: true },
            { answer: '건전지 교체를 알리는 도어락', correct: false },
        ],
        audio: "audio-2.mp3",
    },

    {
        q: '3. 이 소리는 무슨 소리일까요?',
        a: [
            { answer: '자동차 깜빡이', correct: true },
            { answer: '매트로눔', correct: false },
            { answer: '시계 초침', correct: false },
        ],
        audio: "audio-3.mp3",
    },

    {
        q: '4. 이 소리는 무슨 소리일까요?',
        a: [
            { answer: '갓나온 뻥튀기 소리', correct: false },
            { answer: '발포된 총소리', correct: false },
            { answer: '풍선 터뜨리는 소리', correct: true },
        ],
        audio: "audio-4.mp3",
    },

    {
        q: '5. 이 소리는 어디서 들을 수 있을까요?',
        a: [
            { answer: '식당', correct: true },
            { answer: '은행', correct: false },
            { answer: '병원', correct: false },
        ],
        audio: "audio-5.mp3"
    },

    {
        q: '6. 이 소리는 무슨 소리일까요?',
        a: [
            { answer: '고라니 소리', correct: true },
            { answer: '사슴 소리', correct: false },
            { answer: '원숭이 소리', correct: false },
        ],
        audio: "audio-6.mp3",
    },
    {
        q: '7. 이 소리는 무슨 소리일까요?',
        a: [
            { answer: '사슴 소리', correct: true },
            { answer: '문 여는 소리', correct: false },
            { answer: '닭 소리', correct: false },
        ],
        audio: "audio-7.mp3",
    },

    {
        q: '8. 이 소리는 무슨 소리일까요?',
        a: [
            { answer: '총을 갈기는 소리', correct: false },
            { answer: '자갈이 튀는 소리', correct: false },
            { answer: '우박 떨어지는 소리', correct: true },
        ],
        audio: "audio-8.mp3",
    },

    {
        q: '9. 이 소리는 무슨 소리일까요?',
        a: [
            { answer: '재봉틀 소리', correct: true },
            { answer: '기관총 소리', correct: false },
            { answer: '드릴 소리', correct: false },
        ],
        audio: "audio-9.mp3",
    },

    {
        q: '10. 이 소리는 무슨 소리일까요?',
        a: [
            { answer: '인내심 끊어지는 소리', correct: false },
            { answer: '나뭇가지 부러지는 소리', correct: true },
            { answer: '낙엽 밟는 소리', correct: false },
        ],
        audio: "audio-10.mp3",
    }
]

const infoList = [
    {
        name: '지금까지 이런 귀는 없었다, 100%의 적중률! 황금귀',
        desc: '무려 10가지 소리를 모두 다 맞추셨다구요? 진짜 어려운 문제도 섞어놨는데 이럴 줄은 몰랐다구요~! <br><br> 10가지 소리를 다 맞춘 당신은 세상에 관심이 많은 분일 것 같아요. 남들은 그냥 지나칠 수도 있는 사소한 것들도 다 귀 담아 듣고, 궁금해하죠. 그렇다 보니, 이런 것 까지 기억해주는거야? 라는 말도 주변 사람들에게 많이 들을 것 같은데 어떤가요? <br><br> 세상을 남들보다 더 풍부하게 사는 당신을, Cochl에서 AI대신 HI (Human Intelligence)로 스카우트 하고 싶습니다! 함께 하시겠어요?',
    },
    {
        name: '낮말도, 밤말도 다 내가 듣는다! 낮듣밤듣귀',
        desc: '조금만 집중하면 저~멀리 앉아있는 친구의 말도 들리지 않나요? "촉"이 남다른 당신! 매사에 관심도 흥미도 많아 귀를 쫑긋 세우고 있네요.<br><br> 그 중에서도 관심있는 것에는 더더욱 귀 기울이는 당신일 것 같아요. 어떤 소리를 좋아하시나요? 저는 치킨이 바~삭!한 소리랑 삼겹살 굽는 소리를 좋아하는데!! <br><br> 귀가 밝다는 건 참 좋은 능력인 것 같아요. 좋아하는 것들로 세상을 가득 채울 수 있으니까! 그런 의미에서 여자친구가 부릅니다. 어디선가 들려와~ 귀를 기울이면!',
    },
    {
        name: '니 말도 맞고, 네 말도 맞구나! 부처님귀',
        desc: '어허 이렇게 듣고 보니 이 소리 같기도 하고, 저렇게 듣고 보니 저 소리 같기도 하고. 물 흐르듯 부드러운 성격을 가진 당신이라고 많은 사람들이 생각하지 않을까요? <br><br> 중용의 미덕을 가진 당신! 하지만 가끔은 남에게 싫은 소리를 잘 하지 못하고, 늘 그러려니 하고 참고 넘어가는 사람일지도 몰라요. <br><br> 본인이 맞다고 생각하는 것이 있다면 자신있게 밀고 나가는 당신이 되기를 바라며, 부처님귀로 임명합니다.',
    },
    {
        name: 'A whole new world! 아기귀',
        desc: '아직 세상의 많은 소리를 접해보지 못한 아기 귀! 익숙한 소리는 알겠지만, 듣도 보도 못한 소리가 있을수도 있죠. <br><br> 소리도 듣다보면 점점 익숙해지고, 잘 구별할 수 있으니 오늘부터 좋아하는 소리를 찾아보는 건 어떨까요? <br><br> 아직 당신의 귀는 백색 도화지와 같으니 어떻게 색칠해 나갈지를 꿈꿔보는 것도 재미있을거예요 :) 하나씩 더하다보면 어느새 삶이 더 풍요로워질거라 믿습니다! <br><br> 오늘 이 순간부터 눈을 감고 세상이 하는 이야기를 잘 들어보세요!',
    },
    {
        name: '경고 경고, 걱정되어요! 조심하시귀',
        desc: '높은 볼륨은 청력 손실을 초래할 수 있습니다. 혹시 너무 소음에 노출된 환경에 오래 있지 않으셨나요? <br><br> 저도 가끔 제 온전한 기분을 느끼고 싶을 땐 볼륨을 높이고 음악을 들을 때가 있어요. 그런 혼자만의 시간을 보내는 것도 좋지만, 혹시 너무 그런 일이 잦았을까요? <br><br> 당분간은 전자기기를 멀리하시고, 자연스럽게 귀에 들어오는 소리에 좀 더 감각을 집중해보세요. <br><br> 가령 나에게 달려오는 강아지의 발톱이 바닥과 부딪히는 소리! 흔한 소리는 아니지만 나를 행복하게 만들어주는 소리가 아닐까요?',
    },
]