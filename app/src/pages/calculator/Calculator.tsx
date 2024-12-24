import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';
import { ConverterComponent } from "./ConverterComponent.tsx"


export const Calculator: FC = () => {
  return (
    <Page back={false}>
      <List>
        <Section
          header="Fin Calc"
          footer="Convert you money to banana">
          <ConverterComponent />
        </Section>
      </List>
    </Page>
  );
};
