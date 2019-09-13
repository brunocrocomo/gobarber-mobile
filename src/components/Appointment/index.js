import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data }) {
    const dateParsed = useMemo(() => {
        return formatRelative(parseISO(data.date), new Date(), {
            locale: pt,
            addSuffix: true,
        });
    }, [data.date]);

    return (
        <Container>
            <Left>
                <Avatar
                    source={{
                        uri: data.provider.avatar
                            ? //? data.provider.avatar.url
                              data.provider.avatar.url.replace(
                                  'localhost',
                                  '10.0.2.2'
                              )
                            : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
                    }}
                />
                <Info>
                    <Name>{data.provider.name}</Name>
                    <Time>em 3 horas</Time>
                </Info>
            </Left>

            <TouchableOpacity onPres={() => {}}>
                <Icon name="event-busy" size={20} color="#f64c75" />
            </TouchableOpacity>
        </Container>
    );
}
