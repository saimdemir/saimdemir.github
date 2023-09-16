const paragraphs = [
    "Güneş yavaşça ufuk çizgisinin arkasına kayarken, gökyüzü muhteşem bir renk paletine dönüşüyordu. Turuncu ve pembe tonlar, bulutların üzerinde dans ederken, doğanın büyüsü herkesi etkiliyordu. Deniz kıyısında oturup bu muhteşem manzarayı izlemek, hayatın tadını çıkarmak için mükemmel bir yoldu. Her dalga, sahile vuran bir hikaye taşıyordu ve rüzgarın esintisi ruhu okşuyordu.",
    "Bir ormanın derinliklerinde yürümek, doğayla tam anlamıyla bir buluşmaydı. Ağaçların yüksekliği gökyüzüne doğru uzanıyor ve güneş ışığı yapraklar arasında dans ediyordu. Kuşlar melodileriyle ormanın sessizliğini bozuyor, vahşi yaşamın ritmini hissettiriyordu. Her adım, doğanın mucizesini daha da yakından görmek için bir fırsattı.",
    "Bir kitap dünyaları açar, sizi bilinmeyen diyarlara taşır. Sayfalar arasında yolculuk yapmak, farklı karakterlerle tanışmak, hayatın en büyülü deneyimlerinden biridir. Her kelime, yeni bir maceranın kapısını aralar.",
    "Kumsalda yürümek, ayaklarınızın altındaki kumun dokusunu hissetmek gibisi yoktur. Deniz suyu, ayak bileklerinizi serinletirken, uzaklardan gelen dalga sesleri sizi huzura götürür. Güneşin sıcaklığı cildinizi okşarken, her anın tadını çıkarmak için oradaydınız.",
    "Bir piknik günü hazırlamak, sevdiklerinizle harika bir gün geçirmenin ilk adımıdır. Ekmek, peynir, meyve ve lezzetli atıştırmalıklarla dolu bir sepet, açık havada keyifli bir öğün sunar. Yeşilliklerin üzerinde örtünüzü serdiğinizde, doğa ile iç içe olmanın tadını çıkarırsınız.",
    "Bir gece gökyüzünü izlemek, evrenin sonsuzluğunu anlamaya çalışmanın bir yoludur. Yıldızlar arasında kaybolur ve galaksilerin derinliklerine yolculuk yaparsınız. Teleskopunuzla uzak yıldızları gözlemlediğinizde, varoluşun gizemini çözmeye bir adım daha yaklaşırsınız.",
    "Kamp ateşinin etrafında oturup hikayeler anlatmak, doğa ile bağlantı kurmanın en güzel yoludur. Gökyüzündeki yıldızları izlerken, sıcak ateşin yanında dostlarınızla vakit geçirmek unutulmaz anılar yaratmanızı sağlar. Gece ormanın sesleri sizi sarar ve doğanın büyüsünü hissettirir.",
    "Sevdiklerinizle zaman geçirmek, ilişkilerinizi güçlendirmenin ve anılar biriktirmenin önemli bir yolu olabilir. Birlikte gülmek, paylaşmak ve yeni deneyimler yaşamak insanların bağlarını kuvvetlendirir. Aile ve arkadaşlarla geçirilen zaman, yaşamın en değerli hazinelerinden biridir.",
    "Bir enstrüman çalmak, duygularınızı ifade etmenin güzel bir yoludur. Notaların melodileri ruhunuzu coşturur ve ritmi içsel bir deneyim haline getirir. Müziğin büyüsü sizi sarar ve duygusal bir yolculuğa çıkarır.",
    "Doğa yürüyüşü yapmak, bedeninizi canlandırmanın ve zihninizi dinlendirmenin mükemmel bir yoludur. Kuş sesleri sizi doğanın içine çeker ve ormanın sessizliğinde huzuru bulmanızı sağlar. Her adım, yeni keşiflerin kapısını aralar.",
    "Bir dağın zirvesine tırmanmak, fiziksel ve zihinsel dayanıklılığı test etmenin harika bir yoludur. Her adım, yükseklikle birlikte artan bir huzur hissi sunar. Dağın tepesine vardığınızda, tüm zorluklar unutulur ve manzaranın tadını çıkarırsınız.",
    "Bir bahçe oluşturmak, doğayla iç içe olmanın ve kendi elinizle yaratmanın güzel bir yoludur. Toprağı kazarken, bitkileri ekerken ve çiçeklerin büyümesini izlerken, yaşamın döngüsünün bir parçası olursunuz. Bahçenizin meyvelerini yemekse ayrı bir zevktir.",
    "Bir müze ziyareti, sanat ve tarihle tanışmanın ve yeni perspektifler kazanmanın harika bir yoludur. Her sergi, sanatçıların ve kültürlerin zenginliğini yansıtır. Her eser, bir hikaye anlatır ve sizi derin düşüncelere sevk eder.",
    "Bir kitap okumak, kelimelerin büyülü dünyasına dalmanın ve yeni bilgiler öğrenmenin zevkli bir yoludur. Her sayfa, yeni bir maceranın kapısını aralar ve karakterlerle empati yapmanızı sağlar. Kitaplar sizi bilinmeyen diyarlara taşır.",
    "Bir seyahat planlamak, yeni kültürler keşfetmenin ve farklı yerlerdeki güzellikleri görmenin heyecan verici bir yoludur. Her seyahat, yeni insanlarla tanışma ve dünya hakkında daha fazla öğrenme fırsatı sunar. Seyahat etmek, yaşamın renklerini keşfetmenin bir yoludur.",
    "Bir maraton koşmak, fiziksel ve zihinsel dayanıklılığı sınırların ötesine taşımanın bir yoludur. Her adım, hedefe doğru ilerlemenin bir göstergesidir ve bitiş çizgisini geçtiğinizde büyük bir başarı hissi yaşarsınız. Maraton koşmak, kendinize olan güveninizi artırır.",
    "Creating a garden is a beautiful way to connect with nature and craft something with your own hands. Digging the soil, planting, and watching flowers bloom makes you part of the cycle of life. Eating the fruits of your garden is a joy of its own.",
    "Visiting a museum is a wonderful way to acquaint yourself with art and history, gaining new perspectives. Every exhibit reflects the richness of artists and cultures. Each piece of artwork tells a story and encourages deep contemplation.",
    "Reading a book is an enjoyable way to immerse yourself in the magical world of words and acquire new knowledge. Each page opens the door to a new adventure and allows you to empathize with characters. Books transport you to unknown realms.",
    "Planning a trip is an exciting way to discover new cultures and behold the beauty of different places. Each journey offers an opportunity to meet new people and learn more about the world. Traveling is a way to explore life's colors.",
    "Running a marathon is a way to push physical and mental endurance beyond limits. Each step signifies progress toward a goal, and crossing the finish line brings a profound sense of accomplishment. Marathon running boosts self-confidence.",
    "Preparing a family meal is a delightful way to spend time with loved ones and savor delicious dishes. Utilizing creativity in the kitchen strengthens family bonds. Gathering around the table creates warm memories.",
    "Embarking on a cruise is a unique way to explore the vastness of the ocean and encounter new cultures in various ports. Each port of call opens doors to new adventures and experiences. Savoring the breeze on the ship's deck is unforgettable.",
    "Developing a hobby is a great way to dedicate time to your passions and express yourself. Whether it's painting, playing a musical instrument, or crafting, hobbies unleash your creativity. They bring happiness and new skills.",
    "Taking a hot air balloon ride is an extraordinary way to see the beauty of the sky from a bird's-eye view and experience a sense of freedom. Every ascent changes the scenery, and when you ascend from the ground, the world seems smaller. Balloon rides offer a memorable experience.",
];

    





const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);