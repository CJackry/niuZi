import React from 'react';
import VSearch from '@/src/views/VSearch';
import { PageProvider } from '@/src/stores/pageContext';

function Index() {
  return (
    <PageProvider initialVal={{ page: 1 }}>
      <VSearch />
    </PageProvider>
  );
}

export default Index;
