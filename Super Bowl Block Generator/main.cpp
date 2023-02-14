#include <iostream>
#include <iomanip>
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
    string name_array[10][10] = {"Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee",
                                 "Jim",
                                 "Bob",
                                 "Larry",
                                 "Alex",
                                 "Anthony",
                                 "Nick",
                                 "Jeremy",
                                 "Gianna",
                                 "Lexi",
                                 "Renee"};

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

    cout << setw(58) << "Chiefs" << endl
         << endl;
    for (int i = 0; i < SIZE; i++)
    {
        cout << "  " << setw(8) << AFC_array[i] << " ";
    }
    cout << endl;

    for (int i = 0; i < 10; i++)
    {
        cout << NFC_array[i] << " ";
        for (int j = 0; j < 10; j++)
        {
            cout << setw(10) << name_array[i][j] << " ";
        }
        cout << endl
             << endl;
    }

    cout << "Eagles" << endl;

    return 0;
}