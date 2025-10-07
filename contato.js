// Substitua os valores placeholder no HTML pelos reais (telefone e whatsapp).
// Validação simples e comportamento do formulário: abre mailto com conteúdo ou simula envio.

// Seletor do formulário
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
const clearBtn = document.getElementById('clear-btn');

// Validação simples
function validateForm(data) {
  if (!data.get('name').trim()) return 'Por favor digite seu nome.';
  if (!data.get('email').trim()) return 'Por favor digite seu e-mail.';
  // validação simples de e-mail
  if (!/^\S+@\S+\.\S+$/.test(data.get('email'))) return 'E-mail inválido.';
  if (!data.get('message').trim()) return 'Escreva uma mensagem.';
  return null;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const error = validateForm(formData);
  if (error) {
    feedback.textContent = error;
    feedback.style.color = '#ffd2d2';
    return;
  }

  // Se você tiver um backend, aqui enviaria via fetch. 
  // Como fallback simples: abrir mailto com dados preenchidos.
  const name = encodeURIComponent(formData.get('name'));
  const email = encodeURIComponent(formData.get('email'));
  const message = encodeURIComponent(formData.get('message'));
  const subject = encodeURIComponent(`Contato pelo site - ${name}`);
  const body = encodeURIComponent(`Nome: ${formData.get('name')}\nE-mail: ${formData.get('email')}\n\nMensagem:\n${formData.get('message')}`);

  // Abre o cliente de e-mail do usuário (substitua mailto por integração se tiver servidor)
  window.location.href = `mailto:seuemail@exemplo.com?subject=${subject}&body=${body}`;

  feedback.textContent = 'Abrindo seu cliente de e-mail...';
  feedback.style.color = '#c6f7d9';
});

// limpar formulário
clearBtn.addEventListener('click', () => {
  form.reset();
  feedback.textContent = '';
});
