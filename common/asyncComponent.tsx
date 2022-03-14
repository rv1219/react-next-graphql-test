import dynamic from 'next/dynamic';
import React from 'react';
import AppLoader from '@/common/AppLoader';

type IComponentProps ={ 
    children: Element[];
    title?: string;
}
function asyncComponent(importComponent: any) {
    return dynamic(importComponent, {
        loading: () => <AppLoader />,
      });
}

export default asyncComponent