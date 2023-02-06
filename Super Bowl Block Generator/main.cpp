#include <iostream>
#include <cstdlib>
#include <ctime>
#include <cmath>

using namespace std;

const int SIZE = 10;

int main()
{
    srand(time(NULL));

    int AFC_array[SIZE];
    int NFC_array[SIZE];

    for (int i = 0; i < SIZE; i++)
    {
        int a;
        bool found = true;

        while (found)
        {
            found = false;
            a = rand() % 10;
            for (int j = 0; j < i; j++)
            {
                if (a == AFC_array[j])
                {
                    found = true;
                    break;
                }
            }
        }

        AFC_array[i] = a;
    }

    for (int i = 0; i < SIZE; i++)
    {
        int a;
        bool found = true;

        while (found)
        {
            found = false;
            a = rand() % 10;
            for (int j = 0; j < i; j++)
            {
                if (a == NFC_array[j])
                {
                    found = true;
                    break;
                }
            }
        }

        NFC_array[i] = a;
    }

    cout << "AFC numbers: " << endl;
    for (int i = 0; i < SIZE; i++)
    {
        cout << AFC_array[i] << " ";
    }

    cout << endl
         << "NFC numbers: " << endl;
    for (int i = 0; i < SIZE; i++)
    {
        cout << NFC_array[i] << " ";
    }

    return 0;
}