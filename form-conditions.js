const conditions = `
1. Oświadczam, że będę tolerować twoje nieodparte pragnienie spędzania całych weekendów na grze wideo, nawet jeśli ostatecznie zakończysz każdą sesję z pilotem do telewizora w ręce.
2. Zobowiązuję się do regularnego udawania, że twoje opowieści o pracy w korporacji są równie ekscytujące za każdym razem, nawet jeśli naprawdę chciałabyś zrozumieć, czym się zajmuję.
3. Akceptuję, że twoje plany na Walentynki mogą obejmować niekonwencjonalne aktywności, takie jak oglądanie serialików, nawet jeśli marzę o romantycznym weekendzie w górach.
4. Rozumiem, że każda wizyta w sklepie z elektroniką będzie wymagała co najmniej godziny, a moje zadanie będzie polegało na cierpliwym czekaniu na twoje porównania specyfikacji sprzętu.
5. Oświadczam, że będę gotowa na tolerowanie twojej fascynacji gotowaniem, nawet jeśli kończy się to na eksperymentowaniu w kuchni i konieczności sprzątania po kolejnym przepisie.
6. Oświadczam, że będę gotowa na tolerowanie twojej ekscytacji każdym nowym gadżetem technologicznym, nawet jeśli wkrótce po zakupie przekonam się, że leży nieużywany na półce.
7. Oświadczam, że będę gotowa na tolerowanie twojego zapominalskiego charakteru, nawet jeśli będę musiała regularnie przypominać ci o ważnych datach, takich jak nasza rocznica.
8. Zobowiązuję się do akceptacji faktu, że każda romantyczna kolacja będzie musiała być zaplanowana wokół zaplanowanych sesji grania, nawet jeśli ostatecznie skończymy zamawiając jedzenie na wynos.
9. Oświadczam, że zamiast odpowiadać "nic", będę starać się przypomnieć sobie, co się stało i dlaczego jestem zła i opowiadać o tym bez focha.
10. Rozumiem, że kot będzie miał pierwszeństwo w kwestii zajęcia łóżka, nawet jeśli będziemy musieli spać w skomplikowanej układance, aby wszyscy mieściły się wygodnie.

`;


const dialog = document.getElementById('dialog');
const overlay = document.getElementById('overlay');
const textarea = document.getElementById('conditions');

function openDialog() {
  textarea.value = conditions;
  dialog.style.display = 'block';
  overlay.style.display = 'block';
}

function closeDialog() {
  dialog.style.display = 'none';
  overlay.style.display = 'none';
}
