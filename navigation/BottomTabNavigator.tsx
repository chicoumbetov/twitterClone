import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';
import ProfilePicture from '../components/ProfilePicture/ProfilePicture';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false, 
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Ionicons name={"logo-twitter"} size={30} color={Colors.light.tint}/>
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRight: () => (
            <MaterialCommunityIcons name={"star-four-points-outline"} size={30} color={Colors.light.tint}/>
          ),
          headerLeft: () => (
            <ProfilePicture size={40} image={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSEhIYGBgSEhoSEhISEhIVGBIaGBQnGRgUJCQpIy4zKSw4LSQYNDw0LC8xNTo1KCU+QD00Qi42NTEBDAwMEA8QHBISHTQkISg1NDQ/NDQ4MT80MTQxNDg6PzUxODE2NzQxNDE2MT80MTQ0ND0xMTQ0NDQ0NzQ0ND80P//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwECAwj/xABDEAACAQMBBAYHBgMGBgMAAAABAgMABBEFEiExQQYHE1FhcRUiMoGRobEUI0JSwfAzYtFDcoKS4fEkNFOTssIWF2P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAKBEAAwACAgIBAwMFAAAAAAAAAAECAxEEIRIxUQUiYRMyQRRCcYGx/9oADAMBAAIRAxEAPwC5qKKKAKKKKAKKKKAKKKKAKKatd1y3so+0uHwDuRBveRuSqvM1GVTUNS9aV2s7ZvZhiI+0SKebt+DyG+gJDq3SaytDie5RWPBA2058NkZPypp/+cLIP+GsLybxW3KKfHLEUu0nQLO0/gwIG5yMNt2PeWOT86eO2oCLjpfdfi0a8A7x2TfLarden9op2biO4tzzNxbOqj/EMipN21aOwYYYAg8QwBBoDXT9Ut7ldqCZJFPON1al1Q3VOhlnK3aQhrabiJ7UmNs8iQNxpmfpNqOksF1FPtNsTsreQrh15euv+3voCy6KbtI1WC7jE1vIro3NTw8COR86caAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKYOlnSWHTrczS72PqxRj2pHxuUfrTte3aQxvLIwVI1Lux5ADJNUVZag+taqbmUfcW3rRRngAD6i+Z4mgJl0b02WeT0lqPrTuMwxH2LVDvCqPzcPGpd9o8aYbrU44kLu4VRzPyA7/dvpu9M3Um+C2wvJ7iTYz47IBPxxQEv+0eNH2jxqIek71N8lujj/wDGY7XwZRn40ssdajmyFJDL7cbgq6eY/pkUBI/tHjR9o8aZ/tPjR9p8aAePtHjXOdkkQxyKGVhhlYAhgeIpr+0+NH2nxoCuNdtbnQboXdi57CRsNGxJUHOTGw7u48atrof0pg1O3EsW5l3SxE+tG2OHl3GmDVoEuoXgferqR5Hk30qmujuszaRfbYz925jmTlIgOCP1HjigPU9FJdPvEniSaNtpJFDow5gjIpVQBRRRQBRRRQBRRRQBRRRQBRRRQBRRWjsACScADJJ5Y50BUnXh0kKImnxtvlHaz4PBAfUX3nJ9wqNdAJUgtHlY42nJJ8FGAPrUR6Yauby+muCch5CE38EU7KD4AUosNUCWqpyRmcr+ZifUH1PwoCYvqbmVT2ZluJP+XtxvEKngx8e88aldh0IvbgB728ePa/sbf1QueWf9aTdXWhtEn2mT+NMNt2PFQd4UfvjVipdEcd9AQ6bq8dBm2v51Yb8SNtqfAg5qJasLiCRY7xRHKN0F3GDsSfyHz7juq50lBGRTX0i0mK8geGRQQw3Hmh5MPlQFf6fqvaJkjZdTsyL+Vh+n6Vm91qKHHaPvPsooLO3gAM/SoFcXc1nM8TkB0PZOz5wVzlJaXaFFdTsWtI97H17ycEs/fsju8qAlC6tcyfw7KQjk0jxx58cEk/EVh9XuY98lnIAOLRvHLj3Ag/AV0teglxL/AMxqE4z/ANMBVB8s11vOrO8jUta6lITxCyk4Phx/SgMWesxzAmNwSPaU5DL4Ebse8VWfTyMC9ZgP4iK588YJ+VLtclvLSULexFJF9i5jAVjj5MPA4pg1zUjcOrsBlUCEjg2DnNAXB1Ga6ZIJLJzkwHtI8/kY4I9x+tWxXmXqr1L7PqsO/CzEwN/jG754r01QBRRRQBRRRQBRRRQBRRRQBRRRQBTB04vjb6bcyjisDBfNhsj60/1A+uSYppEgB9uSNPi+SPlQHm+nXo/B2tzDEeDSgt443/oaaqfehjAX8OebkfFSBQHonT0CxgDupXtUltm9QeVdNqgFCSYNRjVenEcd6lhEqu7uEeSRiqRsRkJuB38PCn/arz5rTyRXjTHO12xkBOfaV8kUBKenNlHJfJLOvZqE/wCJGc52TlcHnnPdnj3VPui17byRp2cbIrpmEugCuqnBC4J+BwcVSes6zc3rFpDnA3KowAAcgfXjUj6J9KpS1pYog2UmXLEnO9ySB3bieOd2aAu0Gu9vPjcfdSHarIegOHSrRob23aKRQcj1W5qcbiK8y6pYtbzPC/GNivn3H6V6iebca8+9ZWPSL45oufPH+1ARywuTFKko4xyK4x/K2a9eW8wkRXHB0DjyYZFeOq9V9A7szaZayE5JgVW80GwfpQEhooooAooooAooooAooooAooooDFVF19ajiK3tgd7u0rDvCjZH1NWtc3CRo0kjBVQFmYnAAA3mvO3WFrS6ldNKuQkadnADjeA2S589/wAqlEVXpHjaRBKU2FyYpUkHGNw3wOSK5SRMvEe+udeNNdM9PTOiXizQpIhyGUMD5jNLi1Uz1d9MRbEW07YjJ9RzwQk8D4VcccqSKGRgc8weNeA326hPSjoktw7PG6DbO0yPkFW5spAPwI4+dSe4dySo3BcBj35GcV0tpdjgo+FcblfVpxX4Jev5NE4G52yqIuhl1HcKiRO8ZUB5Rj2ichwM8Bu92alvRjofFbXBuZGDOB92gUqqEjBbid/Hw41YFtqCncd3nS1kjcYZQfMCrsPNeVblpkKjx9oZ9ujNJ9WkNsRgFlb2QMEjwqLdI+ldxbxl47NnUDe+Rsp4kDJ/St2LJ5zsra0P+uaqltC0kjBVUe89wFeeNXv2uZ3mbjI2cdw4AfSlWvdIbm9famfIHsou5V939aZ6tPDNehepK9D6Z2ed8M7qR3BvXH1NURaWLsQcYGc5NTzon0hNhcmRFAjlI7aNMhSOG0B3jf8APvqDySno1Y+JkuXSR6AopLY3aTIskbBlcBlYb8g0qqZmaaemZooooeBRRRQBRRRQGK5ySKqlmIAUZJJwABxNZdwASTgAZJO7GKrvV9TfVJDBExWzjbE8q5BuWB/hr/LUpl0zxvQg6WalJqUM8kZKWdqjFW3g3cg3A/3QcfvhU9XB0yuEj054YwFUIqKq8AAw3VT9dDjr7SugIB3EUmlsVPs7j8qVVkVbUTS7R4nol/Vz0ZsZQXuJVabOEgO4Ljg3iam0+hTxHMLkDkAd1U7GxByCQRwIz8amOgdOLq3wrntEH4XPrD3/ANayXxWu5JqvklthcTxSFLresnB8eyRwp4ZNk94PAjn41wttattRjIT1XUZKNgH9+VaWc5T7uTeo4NzWvmPqn01vdyuzbgzf2sWKaXWt1sbmO76U3tu55HIjnSWaRpCEXgeJ/SuFw8GasymOvkuyOVO2P9mouHMjDKruQH604G2jUHKjGN+QMeIpgv8AXIrCJVO9yNyLx86r/W+ltzcZG3sIfwoT9f6V9hGsUeKKsXFyZntdIbusjo1ZJN2lk6qzN97Au9Fzxde7y+FRW2sETefWPeeFOUhJpVY6cJI2kMqrsHBQg7T5/LVdZaZ1MfExYVuu2NtFP7dHDymRgRlSgJHkd9M11D2blNrOzxIBHLJFVK060apyS3pFi9B76S1tUnGXgZmW4TeWhIbAlXw4ZHvqzbeZJFDowZWGVYHIIPOqy6vLsLash4GRtx55AyKdYrxtOfbUFrSRsugyTbMTvZf5fDlyrZFaRxeTi3b17/6T6s0ntrlJEV0YMrDKspyCDwNd6tMDWjNFFFAFaMQBkncN5J5Y51sarLpJr7ahI1tA5S0iOzdTqcG4YcYUP5e80Bp0h6RjUZns7aXFvGM3Eq5zLvwY1Pd4/pXKS/jhjEcYCogwFHLFRFdShilmaPZCepHGqYxhRjApj1DVJJScnC/lFdDHi3KK3Q9a/wBIBIrRr621uJ5DBzUWFFZFaFKS0iDJIuhRyW8cgnRPUzIXPMnPfSGUWkW5dqZh+I5RB+p+IpprIqiMFJ/dTaJul/CFEk5c7wABwVQFA/fjvreOk6UojrUkktIgOFjcPG4kjYqynII+lWHomsJdABsK4G8fm8RVbR0utpGRgykgg5BFUZsKtfklNaLU+y+eO7fXG5uI7ZDI3H8K955Cm/Ruk0bxkTbnUf58VHtY1Fp3LHgPYXurjXjnC3qdNnQ42Gs9d+kINSvHmkZ3OSx+A5Cm2SlT0lkrK3s+giVK0hK9PWl3sMVuyOCWlyS2wDs7JwMHO73UzPQkgA2WGRywd4zx/SvEpb+7evwVcqaqft9kml1kZQuhVSuBsxhdoAbjx86j+rPG0m3HnDqG9YY38D9K2ubwOqAlm2BuBCrjlx58qRSOWOfgByxuArz9OE9rezLxceZVuvQ8aHrPYjszuG1naHjU0stWV1wSCrDBG4gg8RVYUps714zlTu5qeFWzWjTkwTXa9k/ttaGkyKxYm1mY7UfEwMeLL4eFWfaXKSoskbBkdQyspyGB4GqF1DVY5Yl28eo+XVt+7GDS/oT0q9HTrC77Vlcv6hJz9mcn/wAe/wD0OdGOto43MxeFLfsvOitFIIyOfCirDGQXrb6QtZ2ISMlXun7IOOKJjLkeOMD31R19rksyLbQqUiUbKxJnafvLHmav3rF6InVLdERwskLl4y2dk5GCp+VRXo/1TNHj7RcKoPti3B237xttwH90DzoCrEgaNQjDDAbxkHGd+KDVva71XrJMn2RkhiCBXB2mbaB3t4kjvNSDQer+xtMMU7Vx+OUAgHvC8B863rkTML5K/F7KBZSDgjB7jQKkXWDFsalcjGMuCPegNR0Vpl+STIMV2+nSSRvKgBSLG2cjdnh+xXK3t3kJEaFio2iFBOAOJqQ6Nu026PeyD6VnoMPvJj3Wz1hfLpLI9ftekWeCbX5I8kTYB2TgnAODgnursEZThgQe4gipRbX7QaWjoBttMwRmAOxknLDxrta3TXljO1xh3gw0cmAG38uHnUP6+9O3PSevff8Akl+mvW+9DZfPamOPsFYOF+92s4JwN43nxrhHUpk0tJnso9kAPDtSFQAWAAJrVdYgExha3jECsYzhPXABxt5pi5ia8YTb7b7/ACHHe2xjt+P77q7vT/pGmxhZbhEMqq+xAhB9bP4iPhSpbQ3Eb9pbCNkXaR1UqG5lTXN53KVZOl66OtwK8MffyNVnaQJbfaJ1Ztp9hVU7PD9mmIWpkLmMYVcsM93EL+/GpbNqGLBXEUf8XZ2CmV578d9MulAPG/eWyQPFcgD5/KuerpJ0/k3xdJVQWGhN2fb+oxwTstnlx/XiDSaaEzZxFkKN5RMAbs54fpx86ftZV1hRLYDYcEOMjIU785J86Uw3MUcCSD1E2RgY354Y3c6zPkUl5e9vog8leyCvp47MuG3qckHI9XG4/vx7qbTUq1GRezkkxjtMlQf5hgf+3yqLVvw1VJtmnHTr2YrJGN1KdKTaniX80qD4uBV46x0Qs7oZeMK5H8SP1W9/f760xDpdGfkcqcNJNeyg5ELKVXGWBAyQOIwKjsnaR7UbAr+ZT9avfT+rREuQZXWWDZbKOpViSMDOP9OVa6v1S2826K4dF/CkiiXY7wDkH4k1filyuzl87POW05f8D/1Yak1zpcDuSWRWiYniezbZB+GKKeOj2ix2NsltFnZjHtHGXYnLMaKtMI7UUUUAUUVzkcAFjwAyfcM0B5+6zLlX1ObZG5NhCe9lQAmoqKWardGa4llJz2krvnzbI/SkvZjlurr45alIpfseNE1ZIkkhmQtHMPW2SAykcCPl8qctJ1aythIqCQ9pGy9o4BOSNy4HL/SowsTHhvoMbDiDWfJwsdtt7W/fZNW0PdxqEbafFAreukrO64O4HOD9KW6DdxpZ3UbOA8gUIpO9sccVF1pRHR8OXDhP29hW97J8NYijks3DhhHDsSbJzsZABrUaAhnMjTR9gzmQuJBtbJOcY76hsVK46pngvG9xWnrT6PXk37RNdJuo3iltoXKHtO0gLNjaHMZ3VpLC0cbNcTttEYjRZSSxPM7+FRmDjXZ65fM4qnJ0/fZ2OBusf+xznmX0eq7Q2u2J2cjOO/FMthedk+TkqdzKMeYP0rV6SyVnWNJNfJ05lJNEga7ibDoUZgT926sc5Oc45c+ePKtZtZ2gDI6hBwSKMsrEcicjw3bqjDPjgccuPfxFct54AnyzUZ4e30tlVfpT+6hZqWoGXAAwq8BzPif9N1ICaHVu7HnSWQE8Tmung+n2130jLl+o4oWo7HnoxcoL63D+z26bR/xbvnivRwryvFIUdXHFGDDzByK9QafcCWJJB/aIr/5lzWjLgWFJI5OXkVnryoVUUUVSVhRRRQBRRRQGKZult52FjcSc1hcDzYbI+ZFPNQXrdvNjTimcGWVE8wPWI+QqULdJHj9FFrXVafrTQ42iR5Cylk2ydpPzYG7/AHNMmqKkUpjjLNwxu3kkZxW6OZideO+zysNKVR2gNK1IrjZ9H9TlXaispSDwLIVHzxXS46N6vGCzWUgA4lU2/oTU65UEFLCRFPIUilQDgSPI0hkvZY22ZEKkcVYFSPjWBqAPHdXs54YcsV9q44OflWRfSDgw/wAorgsgNYNWvT9ERWmqzA7mH+UVudWnP4x7lH9Kb9k8cbuGf0rZaqeKKe6Wy2c1wtS9Cs3cp4yH3YH6V1iy3tMT5k0h2wK5+kQvDf5UqcML0j15cle6ZIIo1HIV0ZhUa9KyHcq/Wnay0nVJxtRWcjD83Zso+JxVf9RjXpEWqftnWc03ycadJejWrIMvYS4HNQG+hNNQik2thkZXzjs3BRuHHBxVs8mH7ZDwZyavQfVxe9tpkB5xqYjn+RsD5Yqg5YAntOufyqds+Xd86trqWu9q3mhJ/hyhwO4Ou/6VTyWrjyRKenos2iiisBYFFFFAFFFFAYqp+u+6wLaLxeU+4BR+tWxUD62fs0dg8ssKPJuityw3ozniN/LefhUoens8a2U1pSzXkq28W4sPXkJOEUcW/fOri6OaHZ2KgxoGk/HPIAzseZzy92KqnoBdLE0h/EyqM+Gcn9Km/pjxqLS3s9J/6THfWfSY76r/ANMeNHpjxoCVa5YWd6hS4iVt25wAHTxDfsVR/S3o41jNsZ2kffHJ3gHeD48Ksb0x41GenN8skCgnJEmV+G/9KAgKuV4fCl0UoYUjIp/6BJbNqEUd2m1HK3Z4LFQHO5CcEc8VfizOffojU7Jv0f0HttAuXC5cymZMDf8AdAAj/wA6rd5AozXqe1s4ooxFHGqIo2QigBQDxGK8/wDWzBaxXwgtYlTYjBm2CdlnfeBjO7dj41KeRrY8SEvIX8u6lOmae88qRIMs5wO4d5PzpMBUl6D3Cx3DMePZkL7yM1RVOntki0+i3RizsVDbCyS49aWQA4PMKOX1qVekx31ABrHjR6Y8aiCf+kx3036tDa3aGO4jRweBYDaXxB4j3Goh6Y8aPTHjQEI6YdHTYSBo2LwyH1Gb2kPHYb+tSjqWuwt5JH/1IMj/AAMP6mkPTLUFks3Vjn1lK+YP+9SbqTNrJbuwiUXEDFHl37bo+9T9Ru7hVyyvwcsjrvZa1FFFUkgooooAooooDUsBVXdeMReyidT6sVxlx/eUqDVj3iEjdUd1fTBcRvDKu0jjDDf55+lAecbK7aNgynwI7/CnldYzz91T6+6tbQI3ZI+3j1cyHHHeOHnTZb9Xal1243Vdr1yZkO7mNw8qAi3pXxo9K+NT/wD+u7H8kn/cNM0vV+oZgI3YbR2SsyD1c7hvFARhtYxxNNN/fNK2Sdw4D9as606vLPs17RXL49fEhxnu4eVI7/q8iD5iVipHsmXBBB3ngfCgKy2qW6DE0l3Ci8TMhBHLDZJ+tWTYdXlrsffK5YknCyHcOQ4Dx5U66R0RtLSQSxI22AQC7lsZ3E0BNPSZqgusJGXUp2f+0YSKfAqMfrV0YNM2tdGba8ZXmRiyDZDKxXcTnB/ffQFHbVdYLgxsGU4I/eKtC/6vbXY+5R9oEbjId4zvG8fWklp1fRmRe0jdUGdrMqnO7cBgUBFI9ZyOOD3Vv6V8ano6vbD8j/8AcNMp6v8AGR2bnecMJo8HfuPDyoCOelfGg6vjiankPV5Z7K7auW2RtESHGcbzw86b7zq5TtD2aMUONkGXBXdvHsmgK/1HUWlwM+qOA7/GrJ6iY2V7mU+wVSMeLAlj+nxrtZdWtr2Y7VXL89mQ43ncOA8Kl2haGlnGIoFKqGLbySSTxJPwoCaLIDXSmyxRhxpyFAZooooAooooDUjNaNEDyoooDm1qp5VobFe6iigOZ09e6tDpy0UUBodNFanTBRRQGPRgo9FiiigMeixWfRYoooA9GCs+jBRRQGRporcaaKKKA3GnL3VutivdRRQHRbRRyrosCjlRRQHQKBW1FFAFFFFAf//Z'}/>
          )
          
        }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
