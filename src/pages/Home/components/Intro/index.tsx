import React from 'react';
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from './styles';
import introImg from '../../../../assets/intro-img.png';
import { BaseRegularText } from '../../../../components/Typography';
import { Info } from '../../../../components/Info';
import { useTheme } from 'styled-components';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

interface IntroProps {

}

export const Intro: React.FC<IntroProps> = () => {
  const { colors } = useTheme();
  return (
    <IntroContainer>
      <IntroContent className='container'>
        <div>
          <section>
            <IntroTitle size="xl">Encontre o café perfeito para qualquer hora do dia</IntroTitle>
            <BaseRegularText size="l" color='subtitle' as='h3'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</BaseRegularText>
          </section>

          <BenefitsContainer>
            <Info
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <Info
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <Info
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <Info
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="coffee img" />
      </IntroContent>
    </IntroContainer>
  );
};