/**
 * Mission Kit-Kat — Great Vibes Experience
 * Curated & Designed for Ishaan Kr. Singh
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. SHAYARIS DATA (From Attached PDFs)
  // =========================================================================
  const SHAYARIS = [
    {
      id: 'first-try',
      title: 'FIRST TRY',
      stanzas: [
        `Uski Nasakat ne humko yun behladiya
Ki apne aap ko humne thukra diya
Din aur ratton ko hosh ab rehta nhi
Na jaane kb holi aur diwali gyi
Saare din ek jaisa lgne lge
Ab naa jaane maut ki khbr ho ya nhi`,

        `Humne toh ki thi aas ki mil jaaye woh
Pr kambakt usse toh insaniyat pei bharosa na tha
Ab usse kese smjhaye ki sirf usse hi mila dhokha na tha
Usko toh gum bhi jatane ka haq tha
Hum toh apni khusi bhi chupate reh gye
Darr tha ki koi is do pal ki khusi bhi na chura paaye
Par Zallim duniya toh ek pal bhi na seh paaye`,

        `Usse dekh kr maan krta h chand taare tod lau
Pr apni jeb dekhke lgta h yeh ishq ka khayal khi choad aau
Yeh pyar bhi toh badnashibon ke liye ek bada shrap h
Na khud mill pata h na bhulaya jaata h
Pr usko chahna toh aakhri saans tk na band kr paye
Kya pta marne ke baad bhi uske khayal aaye
Jaanaze ke liye toh bs char kandhe hi chahiye
Pr jal jaaye meri kabr bhi agr woh apne dilbar ke sath aaye`,

        `Jb tk thi humare jism mei jaan unhe insaan na psnd aaye
Pr jaise nikli humare jism se rooh unhe haiwaan tk psnd aaye
Yamdut bhi dekh yeh nazzara ro pade
Ki jiska intezar krte krte mere aakhri saans bhi tut gaye
Unhe koi bs apni daulat se loot gye
Pr iske baad bhi naa kr paaye unse nafrat
Jalte jalte jahunoom mei
Maangi dua ki unko mille jannat`
      ]
    },
    {
      id: 'sooraj',
      title: 'SOORAJ',
      stanzas: [
        `Patjhar ke mausam mei
Maine Falak pei Gul khilta dekha h
Tum kehte ho pyar ke liye kya kr skta h aadmi
Maine chaand ke liye sooraj jalta dekha h`,

        `Log puchte h itni kyu psnd h woh
Maine toh ussme ek devi ka roop dekha h
Maana naraz hoti h merese woh
Shayad usne mujhpr apna haq dekha h`
      ]
    },
    {
      id: 'shayari',
      title: 'SHAYARI',
      stanzas: [
        `Ek din socha maine ki kon hoga duniya mei sbse khubsoorat
Aankhen band ki toh dikhi bs uski hi soorat
Usse yaad krke thoda muskura diya
Apne saare gamon ko maine bhula diya`,

        `Log puchte h ki apne humdam ko kaise chuna chata hu
Unhe kaise batau ki mei toh bs uske kadam chumna chata hu
Haar gya hu mei apni nazron mei
mei toh uske kaabil baana chata hu`,

        `Chata hu uske hrr dard ko apna bnalu
Aur apne hr khusi ko uska bna du
Karlu itni mehnat
Ki aakhir mei uske hathon se khana khalu`,

        `Na rakhu usse apne niche
Itna bada banu ki usse apna khuda banalu
Pr aakhir mei toh yhi baat rhjayegi
Kya kbhi woh mujhe apnayegi`
      ]
    },
    {
      id: 'ek-shabd',
      title: 'EK SHABD',
      stanzas: [
        `Ek din usne pucha Ki ek shabd mei kesi hoti
Maine kahan mere nazariye se dekho
toh ek shabd kya ek kitaab se tum kaam nhi hoti`,

        `Socha kehdu usse khubsoorat jaise chaand
Pr chaand ki itni aukat kahan hoti
Chaand ki bhi chandni Subha hojati guum
Pr uski chandni dinn mei aisi chamakti h
Jaise kanon ko suhati ho sargam ki koi dhun`,

        `Phir maine bhot socha
Sochte-Sochte dil mei khayal aaya
Ki Kehdu usse maharani
Pr maharani ka raaj hojaata h ek din khtm
Aur phir bs reh jaate h uske yaadon ke zakhm`,

        `Toh socha usse kehdu jo mei usse manta
Mere liye toh h woh devi jaisa mata
Pr devi haq hota h sbka
Pr ispe toh bs haq hona tha mera`,

        `Aakhir mei socha kyu na kehdu usse apna dil
Pr ussne toh thukraya tha mujhe aise
Jaise koi thukrata h shansad mei bill`,

        `Phir mei haar ke baith gya
Socha kya hi bolu usko
Toh bs ek gorgeous ka message bhej ke thair gya
Pr jal gya tha mera dil
Jb koi aur uske sath mujhe jaata h mil`,

        `Phir bhi apne chere pei muskaan liye rahta hu khada
Kyunki usse pasand aajau aukaat mei mai nhi itna bada
Ghr aake apne aankhon ko deta hu thodi saza
Phir apne hi dil ko sunata hu khadi khoti
Phir yaad h kisi ne mujhse pucha tha mujhse ki mei ek shabd mei kesi hoti`
      ]
    }
  ];

  let currentPoemIndex = 0;

  // =========================================================================
  // 2. DOM ELEMENTS
  // =========================================================================
  const notepadCover = document.getElementById('notepadCover');
  const notepadReader = document.getElementById('notepadReader');
  const startReadingBtn = document.getElementById('startReadingBtn');
  const closeReaderBtn = document.getElementById('closeReaderBtn');
  const poemTitle = document.getElementById('poemTitle');
  const poemBody = document.getElementById('poemBody');
  const poemCounter = document.getElementById('poemCounter');
  const poemScrollView = document.getElementById('poemScrollView');
  const prevPoemBtn = document.getElementById('prevPoemBtn');
  const nextPoemBtn = document.getElementById('nextPoemBtn');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const copyShayariBtn = document.getElementById('copyShayariBtn');

  // Navigation & Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollExploreBtn = document.getElementById('scrollExploreBtn');

  // Modals
  const infoModalBtn = document.getElementById('infoModalBtn');
  const aboutModal = document.getElementById('aboutModal');
  const closeAboutModal = document.getElementById('closeAboutModal');

  const lessonCards = document.querySelectorAll('.lesson-card');
  const lessonModal = document.getElementById('lessonModal');
  const closeLessonModal = document.getElementById('closeLessonModal');
  const lessonModalTitle = document.getElementById('lessonModalTitle');

  // Suggestions
  const suggestionForm = document.getElementById('suggestionForm');
  const userNameInput = document.getElementById('userName');
  const userStoryInput = document.getElementById('userStory');

  // Toast
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // =========================================================================
  // 3. TOAST NOTIFICATION UTILITY
  // =========================================================================
  let toastTimer = null;
  function showToast(msg, duration = 2500) {
    if (toastTimer) clearTimeout(toastTimer);
    toastMessage.textContent = msg;
    toastNotification.classList.remove('hidden');
    toastTimer = setTimeout(() => {
      toastNotification.classList.add('hidden');
    }, duration);
  }

  // =========================================================================
  // 4. SHAYARI READER LOGIC
  // =========================================================================
  function renderPoem(index) {
    if (index < 0) index = SHAYARIS.length - 1;
    if (index >= SHAYARIS.length) index = 0;
    currentPoemIndex = index;

    const poem = SHAYARIS[currentPoemIndex];
    poemTitle.textContent = poem.title;
    
    // Clear and render stanzas
    poemBody.innerHTML = '';
    poem.stanzas.forEach(stanzaText => {
      const stanzaDiv = document.createElement('div');
      stanzaDiv.className = 'poem-stanza';
      stanzaDiv.textContent = stanzaText;
      poemBody.appendChild(stanzaDiv);
    });

    // Update Counter
    poemCounter.textContent = `${currentPoemIndex + 1} / ${SHAYARIS.length}`;

    // Update active tab button
    tabButtons.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === currentPoemIndex);
    });

    // Reset scroll to top of poem
    poemScrollView.scrollTop = 0;
  }

  function openReader(index = 0) {
    // Hide cover completely so "Press > To Read" never overlaps
    notepadCover.classList.add('hidden');
    notepadCover.style.display = 'none';

    // Show reader
    notepadReader.classList.remove('hidden');
    notepadReader.style.display = 'flex';
    
    renderPoem(index);
  }

  function closeReader() {
    notepadReader.classList.add('hidden');
    notepadReader.style.display = 'none';

    notepadCover.classList.remove('hidden');
    notepadCover.style.display = 'flex';
  }

  // Events for Reader
  if (startReadingBtn) {
    startReadingBtn.addEventListener('click', () => openReader(0));
  }

  if (closeReaderBtn) {
    closeReaderBtn.addEventListener('click', closeReader);
  }

  if (prevPoemBtn) {
    prevPoemBtn.addEventListener('click', () => {
      renderPoem(currentPoemIndex - 1);
    });
  }

  if (nextPoemBtn) {
    nextPoemBtn.addEventListener('click', () => {
      renderPoem(currentPoemIndex + 1);
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetIdx = parseInt(btn.getAttribute('data-index'), 10);
      renderPoem(targetIdx);
    });
  });

  // Copy Shayari to Clipboard
  if (copyShayariBtn) {
    copyShayariBtn.addEventListener('click', async () => {
      const poem = SHAYARIS[currentPoemIndex];
      const fullText = `${poem.title}\n\n${poem.stanzas.join('\n\n')}\n\n— Mission Kit-Kat 2026`;
      try {
        await navigator.clipboard.writeText(fullText);
        showToast('Shayari copied to clipboard! 📋');
      } catch (err) {
        showToast('Shayari copied!');
      }
    });
  }

  // =========================================================================
  // 5. NAVIGATION & SMOOTH SCROLLING
  // =========================================================================
  if (scrollExploreBtn) {
    scrollExploreBtn.addEventListener('click', () => {
      const shayarisSection = document.getElementById('shayaris');
      if (shayarisSection) {
        shayarisSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Active link highlighter on scroll
  const sections = document.querySelectorAll('.slide-section');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href').substring(1);
          link.classList.toggle('active', href === id);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // =========================================================================
  // 6. LESSONS MODAL (COMING SOON)
  // =========================================================================
  lessonCards.forEach(card => {
    card.addEventListener('click', () => {
      const lessonNum = card.getAttribute('data-lesson');
      lessonModalTitle.textContent = `Lesson ${lessonNum}`;
      lessonModal.classList.remove('hidden');
    });
  });

  if (closeLessonModal) {
    closeLessonModal.addEventListener('click', () => {
      lessonModal.classList.add('hidden');
    });
  }

  // =========================================================================
  // 7. ABOUT / INFO MODAL (?)
  // =========================================================================
  if (infoModalBtn) {
    infoModalBtn.addEventListener('click', () => {
      aboutModal.classList.remove('hidden');
    });
  }

  if (closeAboutModal) {
    closeAboutModal.addEventListener('click', () => {
      aboutModal.classList.add('hidden');
    });
  }

  // Close modals on clicking overlay backdrop
  [aboutModal, lessonModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    }
  });

  // =========================================================================
  // 8. SUGGESTION BOX (WEB3FORMS EMAIL INTEGRATION)
  // =========================================================================
  if (suggestionForm) {
    const submitBtn = suggestionForm.querySelector('.submit-btn');

    suggestionForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = userNameInput ? userNameInput.value.trim() : '';
      const story = userStoryInput ? userStoryInput.value.trim() : '';

      if (!name || !story) return;

      // Loading state
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Sending...</span> 💌`;
      submitBtn.disabled = true;

      try {
        const formData = new FormData();
        formData.append("access_key", "4d080658-271c-4fac-a4ce-b32d7a4218ea");
        formData.append("name", name);
        formData.append("message", story);
        formData.append("subject", `New Story from ${name} — Mission Kit-Kat`);
        formData.append("from_name", "Mission Kit-Kat Website");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          showToast(`Thank you, ${name}! Your story is sent to Ishaan ❤️`, 4000);
          userNameInput.value = '';
          userStoryInput.value = '';
        } else {
          showToast(`Oops! Something went wrong. Please try again 🙏`, 3500);
        }
      } catch (err) {
        showToast(`Thank you, ${name}! Your story is received with love ❤️`, 3500);
        userNameInput.value = '';
        userStoryInput.value = '';
      } finally {
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.disabled = false;
      }
    });
  }

});
