const works = [
    { id: 1001, title: "Wassily Chair", author: "Marcel Breuer", year: 1925, category: "Bauhaus", wikiSearch: "Wassily Chair", image_local: "images/bauhaus/wassily-chair.jpg", description: "Iconic chair made of tubular steel and leather.", description_ru: "Иконичное кресло из трубчатой стали и кожи. Один из символов функционализма Баухауса." },
    { id: 1002, title: "Cesca Chair", author: "Marcel Breuer", year: 1928, category: "Bauhaus", wikiSearch: "Marcel Breuer", image_local: "images/bauhaus/cesca-chair.jpg", description: "Chair with cantilever frame of steel tube.", description_ru: "Стул с консольной рамой из стальной трубы. Классика модернизма." },
    { id: 1003, title: "Baby Cradle", author: "Peter Keler", year: 1922, category: "Bauhaus", wikiSearch: "Peter Keler", image_local: "images/bauhaus/baby-cradle.jpg", description: "Cradle built from simple geometric forms.", description_ru: "Колыбель из простых геометрических форм." },
    { id: 1004, title: "Bauhaus Chess Set", author: "Josef Hartwig", year: 1923, category: "Bauhaus", wikiSearch: "Josef Hartwig", image_local: "images/bauhaus/bauhaus-chess-set.jpg", description: "Minimalist chess set where form reflects moves.", description_ru: "Минималистичный шахматный набор." },
    { id: 1005, title: "Bauhaus Exhibition Poster", author: "Joost Schmidt", year: 1923, category: "Bauhaus", wikiSearch: "Joost Schmidt", image_local: "images/bauhaus/bauhaus-poster-1923.jpg", description: "Geometric composition, asymmetry.", description_ru: "Постер выставки Баухауса 1923 года." },
    { id: 1006, title: "Universal Typeface", author: "Herbert Bayer", year: 1925, category: "Bauhaus", wikiSearch: "Herbert Bayer", image_local: "images/bauhaus/universal-typeface.jpg", description: "Experimental sans-serif without uppercase.", description_ru: "Экспериментальный гротеск без прописных букв." },
    { id: 1007, title: "Ship-Building Game", author: "Alma Siedhoff-Buscher", year: 1923, category: "Bauhaus", wikiSearch: "Alma Siedhoff-Buscher", image_local: "images/bauhaus/ship-building-game.jpg", description: "Wooden modules for building ships.", description_ru: "Набор деревянных модулей для сборки кораблей." },
    { id: 1009, title: "Bauhaus Table Lamp", author: "Wilhelm Wagenfeld", year: 1924, category: "Bauhaus", wikiSearch: "Wilhelm Wagenfeld", image_local: "images/bauhaus/wagenfeld-lamp.jpg", description: "Desk lamp with glass shade.", description_ru: "Настольная лампа со стеклянным плафоном." },
    { id: 1010, title: "Haus am Horn", author: "Georg Muche", year: 1923, category: "Bauhaus", wikiSearch: "Haus am Horn", image_local: "images/bauhaus/haus-am-horn.jpg", description: "Exemplary Bauhaus house in Weimar.", description_ru: "Показательный дом Баухауса в Веймаре." },
    { id: 1, title: "Map of the World", author: "Paula Scher", year: 1994, category: "Graphic Design", wikiSearch: "Paula Scher", description: "Iconic world map for The New York Times Magazine.", description_ru: "Культовая карта мира для The New York Times Magazine." },
    { id: 2, title: "Neue Haas Grotesk", author: "Max Miedinger", year: 1957, category: "Typography", wikiSearch: "Helvetica", description: "The typeface that would later become Helvetica.", description_ru: "Шрифт, который позже станет Helvetica." },
    { id: 3, title: "Eames Lounge Chair", author: "Charles & Ray Eames", year: 1956, category: "Product Design", wikiSearch: "Eames Lounge Chair", description: "The perfect marriage of form and function.", description_ru: "Идеальное сочетание формы и функции." },
    { id: 4, title: "Vitra Fire Station", author: "Zaha Hadid", year: 1993, category: "Architecture", wikiSearch: "Vitra Fire Station", description: "Hadid's first completed building.", description_ru: "Первое завершённое здание Хадид." },
    { id: 5, title: "IBM Logo", author: "Paul Rand", year: 1972, category: "Graphic Design", wikiSearch: "IBM logo", description: "Eight-bar striped IBM logo.", description_ru: "Восьмиполосный логотип IBM." },
    { id: 6, title: "iPod", author: "Apple Design Team", year: 2001, category: "Product Design", wikiSearch: "iPod", description: "The device that changed how we listen to music.", description_ru: "Устройство, изменившее способ прослушивания музыки." },
    { id: 7, title: "WWF Panda Logo", author: "Sir Peter Scott", year: 1961, category: "Graphic Design", wikiSearch: "World Wildlife Fund panda", description: "One of the simplest and most recognized logos.", description_ru: "Один из самых простых и узнаваемых логотипов." },
    { id: 8, title: "Barcelona Pavilion", author: "Ludwig Mies van der Rohe", year: 1929, category: "Architecture", wikiSearch: "Barcelona Pavilion", description: "Less is more.", description_ru: "Меньше — значит больше." },
    { id: 9, title: "Spotify Brand", author: "Spotify Design Team", year: 2015, category: "Graphic Design", wikiSearch: "Spotify", description: "The green sound wave.", description_ru: "Зелёная звуковая волна." },
    { id: 10, title: "Braun SK 4", author: "Dieter Rams", year: 1956, category: "Product Design", wikiSearch: "Dieter Rams", description: "Called 'Snow White's coffin'.", description_ru: "Названное «гробом Белоснежки»." },
    { id: 11, title: "Moscow Metro Posters", author: "Alexander Rodchenko", year: 1928, category: "Graphic Design", wikiSearch: "Alexander Rodchenko", description: "Constructivist posters.", description_ru: "Конструктивистские плакаты." },
    { id: 12, title: "Dyson AirMultiplier", author: "James Dyson", year: 2009, category: "Product Design", wikiSearch: "Dyson", description: "Engineering as design.", description_ru: "Инженерия как дизайн." },
    { id: 13, title: "WeTransfer Identity", author: "WeTransfer Studio", year: 2018, category: "Graphic Design", wikiSearch: "WeTransfer", description: "Pink and black palette.", description_ru: "Розово-чёрная палитра." },
    { id: 14, title: "TWA Terminal", author: "Eero Saarinen", year: 1962, category: "Architecture", wikiSearch: "TWA Flight Center", description: "Flying saucer meets cathedral.", description_ru: "Летающая тарелка встречается с собором." },
    { id: 15, title: "Venmo Brand", author: "Venmo Design", year: 2018, category: "Graphic Design", wikiSearch: "Venmo", description: "Making money feel human.", description_ru: "Делаем деньги человечными." },
    { id: 16, title: "Porsche 911", author: "Ferdinand Porsche", year: 1963, category: "Product Design", wikiSearch: "Porsche 911", description: "The car that defined the sports car.", description_ru: "Автомобиль, определивший спортивный автомобиль." },
    { id: 17, title: "Tokyo Olympics Pictograms", author: "Katsumi Asaba", year: 1964, category: "Graphic Design", wikiSearch: "1964 Summer Olympics", description: "The first modern Olympic pictograms.", description_ru: "Первые современные олимпийские пиктограммы." },
    { id: 18, title: "Frog Design", author: "Hartmut Esslinger", year: 1969, category: "Product Design", wikiSearch: "frog design", description: "German precision in Silicon Valley.", description_ru: "Немецкая точность в Силиконовой долине." },
    { id: 19, title: "Bloomberg Businessweek", author: "Bloomberg Design", year: 2012, category: "Editorial", wikiSearch: "Bloomberg Businessweek", description: "Bold typography and unexpected layouts.", description_ru: "Смелая типографика." },
    { id: 20, title: "Dieter Rams Principles", author: "Dieter Rams", year: 1970, category: "Graphic Design", wikiSearch: "Dieter Rams", description: "Ten principles for good design.", description_ru: "Десять принципов хорошего дизайна." }
];

const categories = ["All", "Bauhaus", "Graphic Design", "Product Design", "Architecture", "Typography", "Editorial"];

const imageCache = {};

document.addEventListener('DOMContentLoaded', () => {
    initDate();
    initTheme();
    initHome();
    initArchive();
    initDetail();
});

function initDate() {
    const dateEl = document.getElementById('currentDate');
    if (dateEl) {
        const today = new Date();
        const formatted = today.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
        dateEl.textContent = formatted;
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    });
}

function initHome() {
    const card = document.getElementById('card');
    if (!card) return;
    
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const work = works[dayOfYear % works.length];
    
    const cardLink = document.getElementById('cardLink');
    cardLink.href = `detail.html?id=${work.id}`;
    
    const cardBadge = document.getElementById('cardBadge');
    cardBadge.textContent = work.category;
    
    document.getElementById('cardTitle').textContent = work.title;
    document.getElementById('cardYear').textContent = work.year;
    document.getElementById('cardArtist').textContent = work.author;
    document.getElementById('cardDescription').textContent = work.description;
    
    const placeholder = document.getElementById('cardPlaceholder');
    placeholder.textContent = work.title[0];
    
    const cardImage = document.getElementById('cardImage');
    if (work.image_local) {
        const img = document.createElement('img');
        img.src = work.image_local;
        img.alt = work.title;
        img.onload = () => {
            cardImage.innerHTML = '';
            cardImage.appendChild(img);
        };
        img.onerror = () => {
            fetchWikipediaImage(work.wikiSearch).then(url => {
                if (url) {
                    cardImage.innerHTML = '';
                    const newImg = document.createElement('img');
                    newImg.src = url;
                    newImg.alt = work.title;
                    cardImage.appendChild(newImg);
                }
            });
        };
    } else {
        fetchWikipediaImage(work.wikiSearch).then(url => {
            if (url) {
                cardImage.innerHTML = '';
                const img = document.createElement('img');
                img.src = url;
                img.alt = work.title;
                cardImage.appendChild(img);
            }
        });
    }
    
    window.currentWork = work;
}

function initArchive() {
    const archiveList = document.getElementById('archiveList');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const worksCount = document.querySelector('.works-count');
    
    if (!archiveList) return;
    
    let currentCategory = 'All';
    
    function renderWorks(category) {
        const filtered = category === 'All' ? works : works.filter(w => w.category === category);
        
        if (worksCount) {
            worksCount.textContent = `${filtered.length} Works`;
        }
        
        archiveList.innerHTML = filtered.map((work, index) => `
            <div class="archive-item" data-id="${work.id}">
                <div class="archive-item-num">${String(index + 1).padStart(2, '0')}</div>
                <div class="archive-item-image">
                    <div class="placeholder" style="background: #f5f5f5; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: rgba(0,0,0,0.1);">${work.title[0]}</div>
                </div>
                <div class="archive-item-info">
                    <h3 class="archive-item-title">${work.title}</h3>
                    <p class="archive-item-meta">${work.author}, ${work.year}</p>
                    <span class="archive-item-category">${work.category}</span>
                </div>
            </div>
        `).join('');
        
        archiveList.querySelectorAll('.archive-item').forEach(item => {
            const imgDiv = item.querySelector('.archive-item-image');
            const id = parseInt(item.dataset.id);
            const work = works.find(w => w.id === id);
            
            if (work.image_local) {
                const img = document.createElement('img');
                img.src = work.image_local;
                img.alt = work.title;
                img.onload = () => {
                    imgDiv.innerHTML = '';
                    imgDiv.appendChild(img);
                };
            } else {
                fetchWikipediaImage(work.wikiSearch).then(url => {
                    if (url) {
                        imgDiv.innerHTML = '';
                        const img = document.createElement('img');
                        img.src = url;
                        img.alt = work.title;
                        imgDiv.appendChild(img);
                    }
                });
            }
            
            item.addEventListener('click', () => {
                window.location.href = `detail.html?id=${work.id}`;
            });
        });
    }
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.textContent.trim();
            renderWorks(currentCategory);
        });
    });
    
    renderWorks('All');
}

function initDetail() {
    const detailSection = document.getElementById('detailSection');
    if (!detailSection) return;
    
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const work = works.find(w => w.id === id);
    
    if (!work) {
        detailSection.innerHTML = '<div class="container"><h1>Work Not Found</h1><a href="index.html">Return Home</a></div>';
        return;
    }
    
    document.title = `${work.title} — Design Daily`;
    
    detailSection.innerHTML = `
        <div class="detail-hero">
            <img src="" alt="${work.title}" id="detailImage">
            <div class="detail-hero-gradient"></div>
        </div>
        <div class="detail-content">
            <div class="container">
                <span class="detail-badge">${work.category}</span>
                <h1 class="detail-title">${work.title}</h1>
                <p class="detail-meta">${work.author} <span>·</span> ${work.year}</p>
                <p class="detail-description">${work.description}</p>
                
                <div class="detail-info-section">
                    <div class="detail-info-item">
                        <span class="detail-info-label">Category</span>
                        <span class="detail-info-value">${work.category}</span>
                    </div>
                    <div class="detail-info-item">
                        <span class="detail-info-label">Year</span>
                        <span class="detail-info-value">${work.year}</span>
                    </div>
                    <div class="detail-info-item">
                        <span class="detail-info-label">Designer</span>
                        <span class="detail-info-value">${work.author}</span>
                    </div>
                </div>
                
                <div class="detail-actions">
                    <a href="archive.html" class="detail-share">
                        <span>← Browse More Works</span>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    const detailImage = document.getElementById('detailImage');
    
    if (work.image_local) {
        const img = new Image();
        img.src = work.image_local;
        img.onload = () => {
            detailImage.src = work.image_local;
        };
        img.onerror = () => {
            fetchWikipediaImage(work.wikiSearch).then(url => {
                detailImage.src = url || '';
            });
        };
    } else {
        fetchWikipediaImage(work.wikiSearch).then(url => {
            detailImage.src = url || '';
        });
    }
}

async function fetchWikipediaImage(searchQuery) {
    if (imageCache[searchQuery]) {
        return imageCache[searchQuery];
    }
    
    try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(searchQuery)}&prop=pageimages&pithumbsize=800&format=json&origin=*`);
        const data = await response.json();
        
        const pages = data.query?.pages;
        if (pages) {
            for (const pageId in pages) {
                const page = pages[pageId];
                if (pageId !== '-1' && page.thumbnail) {
                    imageCache[searchQuery] = page.thumbnail.source;
                    return page.thumbnail.source;
                }
            }
        }
        
        const searchResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchQuery)}&format=json&origin=*`);
        const searchData = await searchResponse.json();
        
        if (searchData.query?.search?.[0]) {
            const title = searchData.query.search[0].title;
            return fetchWikipediaImage(title);
        }
    } catch (error) {
        console.warn('Wikipedia fetch failed:', error);
    }
    
    return null;
}
