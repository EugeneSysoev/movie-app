import { Container } from '@/shared/ui/container'
import { Logo } from '@/shared/ui/logo'
import facebookIcon from '../assets/fb.svg'
import instagramIcon from '../assets/ig.svg'
import mailIcon from '../assets/mail.svg'
import phoneIcon from '../assets/phone.svg'
import vkIcon from '../assets/vk.svg'
import styles from './Footer.module.css'

const contacts = [
  { icon: phoneIcon, label: '8 800 800 80 80' },
  { icon: mailIcon, label: 'support@mail.ru' },
]

const socials = [
  { icon: facebookIcon, label: 'Facebook' },
  { icon: vkIcon, label: 'ВКонтакте' },
  { icon: instagramIcon, label: 'Instagram' },
]

interface FooterGroupProps {
  title: string
  items: string[]
}

function FooterGroup({ title, items }: FooterGroupProps) {
  return (
    <div>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>
            <button className={styles.placeholder} type="button" disabled>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <Logo />

          <div className={styles.column}>
            <FooterGroup
              title="Меню"
              items={['Фильмы', 'Сериалы', 'Подборки']}
            />
            <FooterGroup
              title="Подписка"
              items={['Тарифный план', 'Акции', 'Подписка за баллы']}
            />
          </div>

          <FooterGroup
            title="Кино и сериалы"
            items={[
              'Весь каталог',
              'Комедии',
              'Драмы',
              'Фэнтези',
              'Триллеры',
              'Детективы',
            ]}
          />

          <div className={styles.column}>
            <FooterGroup
              title="Сотрудничество"
              items={[
                'Размещение рекламы',
                'Партнерам',
                'Партнерская программа',
                'Пользовательское соглашение',
                'Политика конфиденциальности',
              ]}
            />
            <button className={styles.questions} type="button" disabled>
              Вопросы и ответы
            </button>
          </div>

          <div className={styles.column}>
            <div>
              <h2 className={styles.heading}>Техническая поддержка</h2>
              <ul className={styles.list}>
                {contacts.map(({ icon, label }) => (
                  <li key={label}>
                    <button className={styles.contact} type="button" disabled>
                      <img src={icon} alt="" />
                      <span className={styles.muted}>{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={styles.heading}>Подписывайтесь на нас</h2>
              <ul className={styles.socials}>
                {socials.map(({ icon, label }) => (
                  <li key={label}>
                    <button
                      className={styles.social}
                      type="button"
                      disabled
                      aria-label={label}
                    >
                      <img src={icon} alt="" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.copyright}>© КиноДом 2026</p>
      </Container>
    </footer>
  )
}
